const mongoose = require("mongoose");
const dns = require("dns")
dns.setServers(["1.1.1.1", "8.8.8.8"])

async function connectDB(params) {

    await mongoose.connect("mongodb+srv://div_tester:hero123@backend1.vqamill.mongodb.net/projectProfile")

    console.log("connect to DB")
    
}

module.exports = connectDB