const DatabaseService = require('./../services/DatabaseService')

const dashboard = async function(req,res){
    data = await DatabaseService.allData();
    res.send(data);
}

module.exports.dashboard = dashboard;