const bcrypt = require('bcrypt');
const Customer = require('./../models/customers');
const DatabaseService = require('./../services/DatabaseService');
const MailService = require('./../services/MailService');

const register =async function(req, res){
    
    const auth = await DatabaseService.authUser(req.body.email);
    // console.log(auth);
    if(auth==null){
        const hashpass = bcrypt.hashSync(req.body.password, 10);
        
        var obj= new Customer({
            name:req.body.fname+" "+req.body.lname,
            email:req.body.email,
            mobile:req.body.mobile,
            password:hashpass,
            loggedIn:false
        });
        
        // adding obj in mongodb   
        var user = await obj.save();
        
        var status = await MailService.sendMailRegistered( user );
        if(status.response)
            res.send("Registered And Email Sent");
        else     
            res.send("Registered But Email Not Sent");
        
    }
    else{
        res.send("User Already Exist");
    }    
            
}

module.exports.register = register;