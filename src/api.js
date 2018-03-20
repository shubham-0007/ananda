var nodemailer = require('nodemailer');
module.exports = {

       sendmet: function(arg,callback){
        console.log("I am in sendmail");
           var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'prtk1107@gmail.com', // Your email id
                pass: 'daredevil92' // Your password
        }
    });
           
           var mailOptions = {
            from: 'prtk1107@gmail.com', // sender address
            to:  'acrockz01@gmail.com',  // list of receivers
    subject: 'New Aaanada Website User Querry', // Subject line //, // plaintext body
    html: 'Hello Sir,The Following Person Wants to Querry from you Regarding the Aaanada  '+"<br/>"+'<h2> Name:</h2>' +" "+ arg.name+"<br/>"+'<h2> Contact Number: </h2>' +" "+ arg.contact+ "<br>"+'<h2>E-Mail: </h2>' +" "+ arg.email+ "<br>" + '<h2> Message:</h2>'+" "+arg.message+ " " // You can choose to send an HTML body instead
};
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
        /*res.json({yo: 'error'});
        */
        return callback(error,null);
    }else{
        console.log('Message sent: ' + info.response);
       /* res.json({yo: info.response});
       */
       return callback(null,"result");
   };
});
},

               }