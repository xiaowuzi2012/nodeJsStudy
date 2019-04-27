const mod = require("mod1");
console.log(mod);
// mod就是mod1.js中的exports或者是module.exports

// console.log(mod.a);
// console.log(mod.b);
// console.log(mod.c);

// mod();

let p = new mod("wj");
p.show();