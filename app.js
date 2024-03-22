const bodyparser = require('body-parser');
const request = require("request");
const express = require('express');
const app = express();
const port = 3000;
// app.use(express.static("public"));
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended: true}));
app.get('/',function(req,res){
// res.send("Welcome to my website");
res.sendFile(__dirname+"/signup.html");
})
// app.get('/styles.css', function(req, res) {
//     res.sendFile(__dirname + "/" + "styles.css");
//   });
// Can include css like this or else the most convincing way is using static 

// we should place  all the files like css and image that we want to sent to html page through server
app.post("/",function(req,res){
    var firstname = req.body.logname;
    var lastname = req.body.lastname;
    var mail = req.body.logemail;
    res.sendFile(__dirname+"/success.html");
    console.log(firstname);
    // console.log(lastname);
    // console.log(mail);
})
app.listen(port,function(){
    console.log("Server is running in port 3000");

})

//mailchimp api key 91058a0b40656c8690051bdb86b44399-us9 