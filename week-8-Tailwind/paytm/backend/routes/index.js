const express = require('express');
const router = express.Router();
const userRouter = require('./user')

// /api/v1/

// incremental routers to be used in main index.js
router.use("/user", userRouter);
module.exports = router;