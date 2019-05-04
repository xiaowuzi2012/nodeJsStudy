const path = require("path");

let str = "/root/a/b/1.txt";
// /root/a/b
console.log(path.dirname(str));
// .txt
console.log(path.extname(str));
// 1.txt
console.log(path.basename(str));
// D:\root\a\c\strict
console.log(path.resolve("/root/a/b", "../c", "build", "..", "strict"));
// __dirname当前路径，D:\gitClone\nodeJsStudy\handlePostFileDataAndAjaxAcrossDomain\build
console.log(path.resolve(__dirname, "build"));