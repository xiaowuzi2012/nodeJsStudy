const fs = require("fs");

/**
 * fs.writeFile(path, data, callback);
 * @写入数据
 * @param path 路径
 * @param data 写入的数据
 * @param callback 回调
 */
fs.writeFile("./a.txt", "asdfghjkl", err => {
    if (err) {
        console.log("失败", err);
    } else {
        console.log("成功");
    }
})

/**
 * fs.readFile(path, callback);
 * @读取数据
 * @param path 路径
 * @param callback 回调
 */
fs.readFile("./a.txt", (err, data) => {
    if (err) {
        console.log("失败", err);
    } else {
        console.log("成功", data);
        // 将buffer文件转换为字符串,便于查看;发送给浏览器不需要toString,浏览器可以识别二进制.
        console.log("成功", data.toString());
    }
});