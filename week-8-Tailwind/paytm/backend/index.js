// backend/index.js
const express = require('express');
const cors = require("cors");
const rootRouter = require("./routes/index");

const app = express();

app.use(cors());
app.use(express.json());

// rootRouter/users will push it onto user routes
app.use("/api/v1", rootRouter);

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})