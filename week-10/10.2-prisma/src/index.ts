import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// async function insertUser(username: string, password: string, firstName: string, lastName: string) {
//   const res = await prisma.user.create({
//     data:{
//         email:username,
//         password,
//         firstName,
//         lastName
//     },
//     // select is used to return only the id of the created user or any other field
//     select:{
//         id:true,
//         password:true,
//     },
//   })
//   console.log(res);
// }

// insertUser("test@1.gmail.com","123456","test1","test1");

// interface UpdateParams {
//     firstName: string;
//     lastName: string;
// }

// async function updateUser(username: string, {
//     firstName,
//     lastName
// }: UpdateParams) {
//     const res = await prisma.user.update({
//         where:{email:username,},
//         data:{
//             firstName,
//             lastName
//         }
//     })
//     console.log(res);
// }

// updateUser("test@1.gmail.com",{firstName:"test2",lastName:"test2"});

async function getUser(username: string) {
  const res = await prisma.user.findFirst({
    where:{
        email:username
    },
    select:{
        id:true,
        email:true,
        firstName:true,
        lastName:true
        // since password is not selected it will not be returned
    }
  })
  console.log(res);
}

getUser("test@1.gmail.com");