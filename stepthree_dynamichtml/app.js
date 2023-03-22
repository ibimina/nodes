const express = require('express')


const app = express()

app.set('view engine',"ejs")
app.listen(3000)


app.get('/',(req,res)=>{
    res.render('index',{title:"intro"})
})

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact" });
});

//redirect
app.get("/home", (req, res) => {
  res.redirect("/");
});

//404
app.get((req, res) => {
  res.status(404).render("404", { title: "Not found" });
});