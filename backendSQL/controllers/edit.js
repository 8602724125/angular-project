const DatabaseService = require('./../services/DatabaseService');
const edit = async function(req,res){
    
    var emailid=req.params.email;
    console.log(emailid)
    user = await DatabaseService.authUser(emailid);
    if(user == null)
    {
        return ReE(res,"No Such Email Found");
    }   
    else{

        var fname=req.body.fname;
        var lname=req.body.lname;
        var mob=req.body.mobile;
        
        var newvalues = {name:fname+" "+lname , mobile:mob};
        var myquery = emailid;  
        
        let result = await DatabaseService.updateUser(newvalues,myquery);
        return ReS(res,null,"Updated");
    }
        
    }
    module.exports.edit = edit;