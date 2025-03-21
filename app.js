const express = require("express");

//express app

const app = express();

//register view engine
app.set("view engine", "ejs");

//listen for request
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
//console.log("listening on port 3000");

app.get("/", (req, res) => {
  // res.send("<p> home page </p>");
  // res.sendFile("./views/index.html", { root: __dirname });
  res.render("index");
});

app.get("/about", (req, res) => {
  // res.send("<p> about page </p>");
  //res.sendFile("./views/about.html", { root: __dirname });
  res.render("about");
});

//redirects

// app.get("/about-us", (req, res) => {
//   res.redirect("/about");
// });

app.get("/blogs/create", (req, res) => {
  res.render("create");
});

//404 page it should be always last.
app.use((req, res) => {
  res.status(404).render("404"); //sendFile("./views/404.html", { root: __dirname });
});
