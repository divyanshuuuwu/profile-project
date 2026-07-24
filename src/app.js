const express = require("express");
const app = express();
const postModel = require("./models/post.model");
app.use(express.json());


app.post("/posts", (req , res)=>{
    
})





module.exports = app