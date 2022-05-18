const Customer = require('./../models/customers');
const bcrypt = require('bcrypt');
//const { all } = require('../routes/api');

const authUser = async function(uname){
    console.log("User returned");
    return await Customer.findOne({email:uname});  //returns a user if exist else null
}
module.exports.authUser = authUser;


const comparePassword = async function(upass, user){
    return bcrypt.compare(upass, user.password);  //returns true or false
}
module.exports.comparePassword = comparePassword;


const allData = async function(){
    return await Customer.find();
}
module.exports.allData = allData;


const deleteUser = async function(emailid){
    return await Customer.deleteOne({ email: emailid });
}
module.exports.deleteUser = deleteUser;


const updateUser = async function(myquery, newvalues){
    return await Customer.updateOne(myquery, newvalues);
}
module.exports.updateUser = updateUser;