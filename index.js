// console.log("hello")
// const { nwfn1 } = require("./middleware/middleware");
var express = require("express");
var app = express();
require('dotenv').config();

//we can send data in many ways like query string , json , url etc.

// app.get("/", function (req, res) {
//     res.send({ message: "hello world"});
//   });

// app.post("/anil", function (req, res) {
//   res.json({ message: "hello world" });
// });

// app.get("/querystring", function (req, res) {
//   res.send({ message: "hello", data: req.query});
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
//     res.send({ name: `hi ${name}` });
//   }
// );

// import middleware
// app.get(
//   "/students",
//   nwfn1,
//   (req, res) => {
//     let name = req.query.name;
//     res.send({ name: `hi ${name}` });
//   }
// );


//application middleware 
app.use((req,res,next)=>{
if(req.method === 'GET'){
  res.status(400).json({msg:"GET request is not allowed "})
}else{
  next();
}
})

app.post('/students',(req,res)=>{
  res.status(200).json({msg:`hi post method is allowed `})
})



 let port =process.env.port
app.listen(port,()=>{
    console.log(`the server is running on the port ${port}`)
});

