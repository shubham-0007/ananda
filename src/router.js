var express = require("express");

var router = express.Router();
var api = require("./api");
var multer = require('multer');
var upload = multer({ dest: './views' });
var datai;
/*router.post("/",function(req,res){
  req.render({pp:''}})
})
*/

router.post('/sendmail',function(req,res) {
  data = req.body;
  console.log("I am in sendmail");
api.sendmet(data,function(err,result){
        if(err) { 
          return  res.send(err); 
        }
          else {
              return res.send(result); 
          }
        });

});
 
module.exports =  router;
