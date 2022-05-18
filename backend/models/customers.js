const mongoose= require('mongoose')

let customerSchema = new mongoose.Schema({
    // _id:mongoose.Schema.Types.ObjectId,
    name:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:[true,'Email Already Registered ! ']
    },
    mobile:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    loggedIn:{
        type:Boolean,
        default:false
    }
});

const Customer =new mongoose.model("customer",customerSchema);

module.exports = Customer;