const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  // console.log(req.url, req.method);
  // console.log(res)

  //set header content type
  //using html
  // res.setHeader('Content-Type', 'text/html');
  // res.write('<head><link rel="stylesheet" href="#"></head>')
  // res.write('<p>hello, Ibimina</p>')
  // res.write('<p>Backend node js</p>')
  // res.end();

  //using json
  // res.setHeader('Content-Type', 'application/json');
  // res.write(JSON.stringify({name: 'ibimina', age: 25}))
  // res.end();

  //using plain text
  // res.setHeader('Content-Type', 'text/plain');
  // res.write('hello, Ibimina')
  // res.end();

  // using reading a single html
  //   res.setHeader("Content-Type", "text/html");
  //   fs.readFile("./pages/index.html", (err, data) => {
  //     if (err) {
  //       console.log(err);
  //       res.end();
  //     } else {
  //       res.write(data);
  //       res.end();
  //     }
  //   });

  //Basic routing
  res.setHeader("Content-Type", "text/html");
  let path = "./pages/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
        res.statusCode = 200;
      break;
      //redirect an former url to a new one
    case "/about-us":
        res.setHeader('Location', '/about')
         res.statusCode = 301;
         res.end();
    default:
      path += "404.html";
        res.statusCode = 404;
      break;
  }
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});
server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});
