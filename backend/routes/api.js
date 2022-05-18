const express = require("express");
const router = express.Router();
const Login = require('./../controllers/login');
const Register = require('./../controllers/register');
const Dashboard = require('./../controllers/dashboard');
const Delete = require('./../controllers/delete');
const OldData = require('./../controllers/oldData');
const Edit = require('./../controllers/edit');


// mongodb connection
require('./../DBConnect/connectionMDB')

router.get("/", function (req, res) {
    res.send("Hello")
  });

//router.options('*', cors()) // include before other routes  

router.post("/loginme", Login.login);

router.post("/registerme", Register.register)

router.get("/mydashboarddata", Dashboard.dashboard);

router.delete("/deleteme/:email", Delete.deleteme);

router.get("/getOldData/:email", OldData.oldData);

router.put("/edit/:email", Edit.edit);

module.exports = router;