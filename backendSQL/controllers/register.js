const DatabaseService = require("./../services/DatabaseService");
const MailService = require("./../services/MailService");
const db = require("./../DBConnect/connectionSQL");
const bcrypt = require("bcrypt");
const Customer = db.customers;

exports.register = async (req, res) => {
  console.log("Register works================");

  const auth = await DatabaseService.authUser(req.body.email);
  // console.log(auth)
  if (auth == null) {
    const hashpass = bcrypt.hashSync(req.body.password, 10);
    const obj = {
      name: req.body.fname + " " + req.body.lname,
      email: req.body.email,
      mobile: req.body.mobile,
      password: hashpass,
      loggedIn: false,
    };

    // Save Tutorial in the database
    Customer.create(obj)
      .then(
        async (data) => {
          var status = await MailService.sendMailRegistered(data);
          if (status.response)
            // res.send("Registered And Email Sent");
            return ReS(res, obj, "Registered And Email Sent");
          // res.send("Registered But Email Not Sent");
          else return ReS(res, obj, "Registered But Email Not Sent");
        }
        // ()=>{
        //   return ReS(res, obj, "Registered And Email Sent");
        // }
      )
      .catch((err) => {
        console.log("Error is here");
        console.log(err);
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial.",
        });
      });
  } else {
    // res.send("User Already Registered");
    return ReE(res, "User Already Registered");
  }
};
