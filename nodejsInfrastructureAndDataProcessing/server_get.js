const fs = require("fs");
const url = require("url");
const http = require("http");
const querystring = require("querystring");

let server = http.createServer(function (req, res) {
    // querystring
    let [reqUrl, query] = req.url.split("?");
    let get = querystring.parse(query, true); // true,解析url中query的数据
    console.log(reqUrl, get);
    // url
    let result = url.parse(req.url);
    console.log(result);
    // 1.html
    console.log(req.url);
    fs.readFile(`www${req.url}`, (err, buffer) => {
        if (err) {
            res.writeHead(404);
            res.write("Not found");
            res.end();
        } else {
            res.write(buffer);
            res.end();
        }
    });
});
server.listen(8080);
console.log("listen:" + 8080);