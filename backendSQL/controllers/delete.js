const DatabaseService = require('./../services/DatabaseService');

const deleteme = async function(req, res) {
    var emailid=req.params.email;  
    let result = await DatabaseService.deleteUser(emailid); 
    // console.log(result)
    if(result==0)       
        // res.send("Does Not exist");    
        ReE(res, "Does Not exist");
    else       
        // res.send("Deleted");    
        ReS(res, null, "Deleted");
}
module.exports.deleteme = deleteme;