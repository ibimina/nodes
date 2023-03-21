//import express
const express = require("express");

//init express
const app = express();

//listen for request for request in port 3000
app.listen(3000);

//plain text
// app.get('/',(req,res)=>{
// res.send("hello")
// })

//html
// app.get("/", (req, res) => {
//   res.send("<p>hello backend</p>");
// });

//send file
app.get('/',(req,res)=>{
res.sendFile('./views/index.html',{root:__dirname})
})

app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});

//Redirect
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

app.get("/contact", (req, res) => {
  res.statusCode(404).sendFile("./views/contact.html", { root: __dirname });
});

//404 page
app.get((req, res) => {
  res.sendFile("./views/404.html", { root: __dirname });
});