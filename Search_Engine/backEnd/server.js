const express = require("express")
const app =express()
const cors = require("cors")
const courseSchema = require("./model/schema")
const DB = require("./DB/db")
app.use(cors())

app.get("/api/v1/search", async(req,res)=>{
    await DB();
    // const course =await courseSchema.find()
    // console.log(course);

    let query = req.query.search      // use - http://localhost:3000/api/v1/search?search=testing
    let course = await courseSchema.find({title:{$regex:query,$options:"i"}})  // use - http://localhost:3000/api/v1/search?search=basic
    console.log(query);

    // res.send("request received and response sent here")
    res.json(course)
})

app.listen(3000,()=>{console.log("server is running");
})