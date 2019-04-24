const http = require("http");
const querystring = require("querystring");

let server = http.createServer(function (req, res) {
  let arr = [];
  req.on("data", buffer => {
    arr.push(buffer);
  });
  req.on("end", () => {
    let buffer = Buffer.concat(arr);
    console.log(buffer);
  });
});
server.listen(8080);