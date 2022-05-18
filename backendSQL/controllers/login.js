const DatabaseService = require("./../services/DatabaseService");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  console.log("Login works");
  const emailid = req.body.email;
  const password = req.body.password;
  let obj = await DatabaseService.authUser(emailid);
  if (obj == null) {
    // res.send("Invalid Email ID");
    return ReE(res, "Invalid Email ID");
  }
  let data = await DatabaseService.comparePassword(password, obj);
  if (data) {
    let payload = { emailId: obj.name, secretKey: "mysecretkey" };
    let token = jwt.sign(payload, "mysecretkey", { expiresIn: "1h" });

    return ReS(res, obj, token);
    // test();
    //  res.send("Welcome! You are Logged In\nYour Token : "+token);
  } else {
    return ReE(res, "Invalid Password");
    // res.send("Invalid Password");
  }
};
