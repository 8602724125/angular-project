const DatabaseService = require('../services/DatabaseService');

const oldData = async function(req,res){
    let data = await DatabaseService.authUser(req.params.email);
    res.send(data);
}
module.exports.oldData = oldData;