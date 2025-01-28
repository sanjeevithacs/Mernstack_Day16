const {Schema,model} = require("mongoose")

//structure

// const customerSchema = new Schema({                 //every property is optional property here
//     name:String,
//     age:Number,
//     friend:Schema.Types.ObjectId,
//     address:{
//         state:String,
//         pincode:Number
//     },                           //object
//     hobbies:[String]
// }) 



const customerSchema = new Schema({                 //required property
    name:String,
    age:{
        type:Number,
        required:true,                  //require
        min:20,
        max:100
    },
    email:{
        type:String,
        require:true,
        minLength:10,
        lowercase:true
    },
    friend:{
        type:Schema.Types.ObjectId,
        ref:"customer"
    },
    address:{
        state:String,
        pincode:Number
    },                           //object
    hobbies:[String]
}) 


module.exports=model("customer",customerSchema)      //export