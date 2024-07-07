import express from "express";
const app  = express();
import {BACKEND_URL} from "@repo/common/config";

// @ts-ignore
app.get("/", (req, res)=>{
    res.json({
        message:"Hello from the express APP !!"
    })
})

app.listen(BACKEND_URL, ()=>{
    console.log("Server is running on port 3000");
});