// console.log("hello")
// const { nwfn1 } = require("./middleware/middleware");
// var express = require("express");
// var app = express();
// require('dotenv').config();

//we can send data in many ways like query string , json , url etc.

// app.get("/", function (req, res) {
//     res.send("hello world");
//   });

// app.post("/anil", function (req, res) {
//   res.json({ message: "hello world" });
// });

// app.get("/querystring", function (req, res) {
//   res.json({ message: "hello", data: req.query});
// });

// app.get("/students/:name", function (req, res) {
//     let std_name=req.params.name
//     res.json({name:std_name});
//   });

//Middleware

// app.get(
//   "/students",

//   (req, res, next) => {
//     req.query.name = "hamdaan khan";
//     next();
//   },

//   (req, res) => {
//     let name = req.query.name;
//     res.json({ name: `hi ${name}` });
//   }
// );

// import middleware
// app.get(
//   "/students",
//   nwfn1,
//   (req, res) => {
//     let name = req.query.name;
//     res.json({ name: `hi ${name}` });
//   }
// );


//application middleware 

// app.use((req,res,next)=>{
// if(req.method === 'GET'){
//   res.status(400).json({msg:"GET request is not allowed "})
// }else{
//   next();
// }
// })

// app.post('/students',(req,res)=>{
//   res.status(200).json({msg:`hi post method is allowed `})
// })


// Errorhandling middleware

// app.use((err,req,res,next)=>{
//   console.error(err.stack);
//   res.status(400).send('something went wrong');
// })
// app.get('/',(req,res)=>{
//   res.send("hi & hello")
// })



// Email && password validation in express

// const express = require('express');
// const app = express();
// require('dotenv').config();
// const { body, validationResult } = require('express-validator');
// app.use(express.json());
// app.post('/hello', 
// body('email')
//.isEmail()
//.withMessage('the email must contain @ and . symbol'),
// body('password')
//.isLength({min:5})
//.withMessage('the length should be min 5 character'),
// (req, res) => {
//   const result = validationResult(req);//check valid or not ?
//   if (!result.isEmpty()) {
//     res.send({ errors: result.array() });
//   }
//   return res.send(`my Email is ${req.body.email} && password is ${req.body.password}!`);
// });



// user name validation in express
// const express = require('express');
// const { query, validationResult } = require('express-validator');
// const app = express();
// require('dotenv').config();
// app.use(express.json());
// app.get('/hello', query('person').notEmpty(), (req, res) => {
//   const result = validationResult(req); //check valid or not ?
//   if (result.isEmpty()) {
//     return res.send(`Hello, ${req.query.person}!`);
//   }

//   res.send({ errors: result.array() });
// });



 let port =process.env.port
app.listen(port,()=>{
    console.log(`the server is running on the port ${port}`)
});

