const url = require("url");

let str = "http://www.bing.com:8080/a/b/1.html?a=1&a=2&a=3";
// Url {
//     protocol: 'http:',
//     slashes: true,
//     auth: null,
//     host: 'www.bing.com:8080',
//     port: '8080',
//     hostname: 'www.bing.com',
//     hash: null,
//     search: '?a=1&a=2&a=3',
//     query: {
//         a: ['1', '2', '3']
//     },
//     pathname: '/a/b/1.html',
//     path: '/a/b/1.html?a=1&a=2&a=3',
//     href: 'http://www.bing.com:8080/a/b/1.html?a=1&a=2&a=3'
// }
console.log(url.parse(str, true));
