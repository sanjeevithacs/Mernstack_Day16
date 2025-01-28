//28.01.25

const mongoose = require("mongoose")
const cust = require("./schema")

async function db() {
    try{   
        await mongoose.connect("mongodb://localhost:27017/customer")      //connection created              //localhost:27017 - default   | customer - db name
        console.log("database is connected");

    }catch(e){
        console.log("error");
    }


//traditional method
    // const newCustomer = new cust({
    //     name:'sanj',
    //     age:19,
    //     address:{
    //         pincode:4567,
    //         state:"TN"
    //     },
    //     hobbies:['drawing','gamming']
    // })
    // newCustomer.save()



//modern method
//    const newCustomer = await cust.create({
//         name:'sri',
//         age:21,
//         email:"SRISANJ34@gmail.com",
//         address:{
//             pincode:4537,
//             state:"TN"
//         },
//         hobbies:['drawing','gamming']
//    })
//    console.log(newCustomer); 
   


// const customerDetails = await cust.find()
// console.log(customerDetails);

// const customerDetails = await cust.findById("6798621ee3f9770eeb85f6de")
// console.log(customerDetails);

// const customerDetails = await cust.findById("6798621ee3f9770eeb85f6de",{name:1,age:1})
// console.log(customerDetails);

// const customerDetails = await cust.findById("6798621ee3f9770eeb85f6de",{name:1,age:1,_id:0})
// console.log(customerDetails);

// const customerDetails = await cust.find().where("name").equals("sanj").limit(1)
// console.log(customerDetails);



//    const newCustomer = await cust.create({
//         name:'alice',
//         age:21,
//         email:"alice56@gmail.com",
//         friend:"67985c2b2567ef6d11a0779b",
//         address:{
//             pincode:4537,
//             state:"TN"
//         },
//         hobbies:['drawing','gamming']
//    })
//    console.log(newCustomer);


// const customerDetails = await cust.findById("679865305b190b4cf8c97ab7")
// console.log(customerDetails);

// const customerDetails = await cust.findById("679865305b190b4cf8c97ab7").populate("friend")        // POPULATE METHOD 
// console.log(customerDetails);

const updatedata = await cust.updateOne({name:"sanj"},{$set:{age:23}})
console.log(updatedata);
}
db()    