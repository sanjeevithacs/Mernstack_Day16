const {Schema,model}=require("mongoose")
const courseDetails = new Schema({
    title:String,
    description:String,

})

module.exports=model("course",courseDetails)