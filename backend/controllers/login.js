const DatabaseService=require('./../services/DatabaseService');
const jwt = require('jsonwebtoken');

const login = async function(req,res){
        console.log("Login Works");
        console.log(req.body);
        var uname=req.body.email;
        var upass=req.body.password;
        console.log(uname)
        console.log(upass)
        const user = await DatabaseService.authUser(uname);
        console.log(user);
        if(user==null)
        {
            res.send("User not registered");
        }
        const response = await DatabaseService.comparePassword(upass, user);
        
        if(response)
        {
            let payload={emailId:user.name,secretKey:'mysecretkey'};
            let token = jwt.sign( payload, 'mysecretkey', { expiresIn: '1h' });
            res.send(token);
        }
        else{
            res.send("Invalid Password");
        }
}

module.exports.login = login;