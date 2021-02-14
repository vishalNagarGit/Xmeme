var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
var createError = require('http-errors');
//const connectDB = require('../Database/connection');

//mongoose.connect('mongodb://127.0.0.1:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});




   router.use(bodyParser.urlencoded({ extended: false }));
   router.use(bodyParser.json());



  const memeSchema = new mongoose.Schema({
    name: String,
    url : String,
    caption : String
  });

  const Meme = mongoose.model('Memes', memeSchema); 

/* GET home page. */

router.get('/', function(req, res, next) {
        // console.log("get called");



         
          Meme.find().sort({$natural: -1}).limit(100).exec((err, result)=>{
          if(err){
              console.log(err);
          }
          else{
            //  console.log(result);
              res.send(result);
          }})

});



router.get('/:id', function(req, res, next) {
     
    Meme.findById(req.params,(err,result)=>{
        
        if(!err&&result)
        {
            // console.log(result);
             res.json(result);
        }
        else
        {
            res.status(404).send("<h1>404 </h1><h2>not found</h2>");
        }
    })
 
 
 });


router.post('/',(request,response) => {
    //code to perform particular action.
    //To access POST variable use req.body()methods.
  //  console.log(request.body);

    var newMeme = new Meme({
        ... request.body
    })

   
    

   // console.log(newMeme);
    

    newMeme.save((err,obj)=>{
        if(err)
        console.log("error");
        else
        {
           // console.log(obj);
            response.status(200).send({message:"successful"});
        }
      });


});



module.exports = router;



