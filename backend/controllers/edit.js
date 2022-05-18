const DatabaseService = require('./../services/DatabaseService');
const edit = async function(req,res){
    
    var emailid=req.params.email;
    console.log(emailid)
    let user =await DatabaseService.authUser(emailid);
    if(user == null)
        res.send("No Such Email Found");

    var fname=req.body.fname;
    var lname=req.body.lname;
    var mob=req.body.mobile;
  
    var myquery = { email: emailid };  
    var newvalues = { $set: {name:fname+" "+lname , mobile:mob} };
  
    let result =await DatabaseService.updateUser(myquery, newvalues);
    res.send(result);
    
}
module.exports.edit = edit;