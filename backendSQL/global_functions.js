ReS = function(res, user, data)
{
    let send_data = { success : true, user : user, data : data}
    res.json(send_data);
};

ReE = function(res, err)
{
    let send_data = { success : false, err : err}
    res.json(send_data);
}

