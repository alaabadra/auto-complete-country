const path = require("path");
const fs = require("fs");

const handlehomePage = (request, response) => {
  const pathFile = path.join(__dirname, "..", "public", "index.html");
  fs.readFile(pathFile, (error, file) => {
    if (error) {
      response.writeHead(500, {"Content-Type": "text/html"});
      response.end("<h1>Sorry, internal server error</h1>");
    } else {
      response.writeHead(200, {"content-Type": "text/html"});
      response.end(file);
    }
  });
};

const handleNotFond = (request, response) => {
  const pathfile = path.join(__dirname,"..","public","pages","notFound.html");
  fs.readFile(pathfile, (error, file) => {
    if (error) {
      response.writeHead(500, {"Content-Type": "text/html"});
      response.end("<h1>Sorry,  internal server error</h1>");
    } else {
      response.writeHead(404, {"content-Type": "text/html"});
      response.end(file);
    }
  });
};

const handelServe = (request, response) => {
  const endpoint = request.url;
  const extintion = endpoint.split(".")[1];
  const contantType = {
    html: "text/html",
    css: "text/css",
    js: "text/javascript",
    json: "application/json"
  };
  pathFile = path.join(__dirname, "..", endpoint);
  fs.readFile(pathFile, (error, file) => {
    if (error) {
      response.writeHead(500, {"Content-Type": "text/html"});
      response.end("<h1>Sorry,  internal server error</h1>");
    } else {
      response.writeHead(200, {"contant-Type": contantType[extintion]});
      response.end(file);
    }
  });
};

const handelJsonFile = (request, response) => {
  const pathFile = path.join(__dirname, "Country.json");
  fs.readFile(pathFile, (error, file) => {
    if (error) {
      response.writeHead(500, {"Content-Type": "text/html"});
      response.end("<h1>Sorry,  internal server error</h1>");
    } else {
      response.writeHead(200, {"contant-Type": "application/json"});
      response.end(file);
    }
  });
};

module.exports = {
  handlehomePage,
  handleNotFond,
  handelServe,
  handelJsonFile
};
