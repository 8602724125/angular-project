const DatabaseService = require('../services/DatabaseService');

const oldData = async function(req,res){
    let data = await DatabaseService.authUser(req.params.email);
    return ReS(res, data, null);
}
module.exports.oldData = oldData;