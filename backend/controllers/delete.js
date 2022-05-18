const DatabaseService = require('./../services/DatabaseService');

const deleteme = async function(req, res) {
    var emailid=req.params.email;  
    let result = await DatabaseService.deleteUser(emailid);        
    res.send(result);    
}
module.exports.deleteme = deleteme;