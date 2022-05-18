const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'anshulsharma1215114@gmail.com',
      pass: 'Google@13march2000'
    }
  });

const sendMailRegistered = async function( user ){
    var mailOptions = {
        from: 'anshulsharma1215114@gmail.com',
        to: user.email,
        subject: 'Registered In MEAN App',
        text: 'Dear '+user.name+', you are Successfully registered in MEAN App.'
    };

    var status;

    return await transporter.sendMail(mailOptions);
        
    // , function(error, info){
    //     if (error) {
    //         console.log("error============");
    //         
    //     } else {
    //         console.log('Email sent: ' + info.response);
    //         return 'Email sent: ' + info.response;
    //     }
    // });
}  

module.exports.sendMailRegistered = sendMailRegistered;