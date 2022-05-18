const db = require("./../DBConnect/connectionSQL"); 
const Customer = db.customers;
const bcrypt = require('bcrypt');

const authUser = async function(emailid){
    console.log("User returned");
    return await Customer.findOne({where:{ email : emailid}});  //returns a user if exist else null
}
module.exports.authUser = authUser;


const comparePassword = async function(upass, user){
    return bcrypt.compare(upass, user.password);  //returns true or false
}
module.exports.comparePassword = comparePassword;


const allData = async function(){
    return await Customer.findAll();
}
module.exports.allData = allData;


const deleteUser = async function(emailid){
    return await Customer.destroy({where:{ email: emailid }});
}
module.exports.deleteUser = deleteUser;


const updateUser = async function(newvalues,myquery){
    return await Customer.update(newvalues,{where:{email:myquery}});
}
module.exports.updateUser = updateUser;