const express = require("express");
const router = express.Router();
const zod = require("zod");
const { User } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const {authMiddleware} = require("../middleware");
const { route } = require("./user");
//              SIGN IN LOGIC

const signupBody = zod.object({
  username: zod.string().email(),
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string().min(4),
});

router.post("/signup", async (req, res) => {
  const { success } = signupBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Email already taken/ check inputs.",
    });
  }
  const existingUser = await User.findOne({
    username: req.body.username,
  });
  if (existingUser) {
    return res.status(409).json({
      message: "Email already taken/ check inputs.",
    });
  }
  const user = await User.create(req.body);

  const userId = user._id;

  const token = jwt.sign(
    {
      userId,
    },
    JWT_SECRET
  );

  res.json({
    message: "User created successfully",
    token: token,
  });
});

//              SIGN UP LOGIC
const signinBody = zod.object({
  username: zod.string().email(),
  password: zod.string().min(4),
});

router.post("signin", async (req, res) => {
  const { success } = signinBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Invalid email/password",
    });
  }

  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  if (user) {
    const token = jwt.sign(
      {
        userId: user._id,
      },
      JWT_SECRET
    );

    res.json({
      token: token,
    });
    return;
  }
  res.status(411).json({
    message: "Error while logging in.",
  });
});


//      update body

const updateBody = zod.object({
    password: zod.string().min(4).optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
})

router.put("/", authMiddleware, async(req,res)=>{
    const {success} = updateBody.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message:"Invalid inputs/ error while updating"
        })
    }

    await User.updateOne({_id:req.userId}, req.body);

    res.json({
        message:"User updated successfully"
    })
})

//      filtering routes
route.get("/bulk", async(req,res)=>{
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user:users.map(user=>({
            username:user.username,
            firstName:user.firstName,
            lastName:user.lastName,
            _id:user._id
        }))
    })
})

module.exports = router;
