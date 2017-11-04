var nodemailer = require('nodemailer');
module.exports = {

       sendmet: function(arg,callback){
        console.log("I am in sendmail");
           var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
            user: 'anandahisar@gmail.com', // Your email id
            pass: 'Ananda18787' // Your password
        }
    });
           
           var mailOptions = {
    from: 'anandahisar@gmail.com', // sender address
    to:  'Vijay.Bhrigu@gmail.com', // list of receivers
    subject: 'Verificatio n Code', // Subject line //, // plaintext body
    html: '<h2> The Mail Id is:- </h2>' +" "+ arg.email+ "<br>"+'<h2> The User is:- </h2>' +" "+ arg.name+ "<br>" + '<h2> Message is:-</h2>'+" "+arg.message+ " " // You can choose to send an HTML body instead
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
       return callback(null,"res+ult");
   };
});
},

               }