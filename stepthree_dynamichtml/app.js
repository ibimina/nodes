const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.listen(3000);

app.get("/", (req, res) => {
  const nodeTopics = [
    { id: "1", title: "Introduction to nodejs" },
    { id: "2", title: "Request types" },
    { id: "3", title: "import and export modules" },
  ];
  res.render("index",{title:"Intro",nodeTopics})
});

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
