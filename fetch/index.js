const fs = require("fs");
const path = require("path");
const http = require('http');

http.createServer((req, res) => {
    let reqUrl = path.join(__dirname,  req.url);
    fs.readFile(reqUrl, (err, buffer) => {
        if (err) {
            res.writeHead(404);
            res.write("Not found");
            res.end();
        } else {
            res.write(buffer);
            res.end();
        }
    });
}).listen(8080);

console.log("listening:8080");