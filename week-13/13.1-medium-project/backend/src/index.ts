import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Hono } from 'hono';
import { sign, verify } from 'hono/jwt'

// Create the main Hono app
const app = new Hono<{
	Bindings: {
		DATABASE_URL: string,
		JWT_SECRET: string,
	}
}>();

// setting up middlewares

app.use('/api/v1/blog/*', async (c, next)=>{
  // get the header
  // verify the header
  const header = c.req.header("authorization") || "";

  // bearer tokenv => ["bearer", "token"]

  const token = header.split(" ")[1];

  const response = await verify(token, c.env.JWT_SECRET);
  if (response.id) {
      next();
  } else {
    c.status(403)
    return c.json({error:"Unauthorized"});
  }
})



app.post('/api/v1/signup', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

const body = await c.req.json();
try {
  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: body.password,
      name: body.name // Add the 'name' property
    }
  });
  const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
  return c.json({ jwt });
} catch(e) {
  c.status(403);
  return c.json({ error: "error while signing up" });
}
})


app.post('/api/v1/signin', async (c) => {
  const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

  const body = await c.req.json();
  const user = await prisma.user.findUnique({
    where:{
      email: body.email
    }
  });

  if(!user){
    c.status(403);
    return c.json({error:"User not found"});
  }

  const jwt = await sign({id:user.id}, c.env.JWT_SECRET);
	return c.json({jwt});
})

app.get('/api/v1/blog/:id', (c) => {
	const id = c.req.param('id')
	console.log(id);
	return c.text('get blog route')
})

app.post('/api/v1/blog', (c) => {

	return c.text('signin route')
})

app.put('/api/v1/blog', (c) => {
	return c.text('signin route')
})

export default app;
