const express = require("express");
const app = express();
const multer = require("multer")
const postModel = require("./models/post.model");
const uploadFile = require("./services/storage.service")


app.use(express.json());

const upload = multer({storage: multer.memoryStorage()})

app.post("/create-post", upload.single("image"), async(req , res)=>{
    const data = req.body
   
    const result = await uploadFile(req.file.buffer)

    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    })
    return res.status(201).json({
        message: "post created sucessfully",
        post
    })
})

app.get("/posts" , async(req , res)=>{
        const posts = await postModel.find()

        res.status(200).json({
            message: " posts feteched",
            aloo:posts
        })
})




module.exports = app