const handler = require("./handler");

const router = (request, response) => {
  const endpoint = request.url;
  if (endpoint === "/") {
    handler.handlehomePage(request, response);
  } else if (endpoint.includes("public")) {
    handler.handelServe(request, response);
  } else if (endpoint === "/Country") {
    handler.handelJsonFile(request, response);
  } else {
    handler.handleNotFond(request, response);
  }
};

module.exports = router;
