const mongoose = require("mongoose")

async function DB(){
    try{
        await mongoose.connect("mongodb://localhost:27017/course")
        console.log("DB connectd")
    }catch(e){
        console.log("error");
        
    }
}

module.exports=DB