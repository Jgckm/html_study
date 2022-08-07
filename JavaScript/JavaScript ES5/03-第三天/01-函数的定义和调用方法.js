// 函数的定义方式

//  1. 自定义函数(命名函数)
function fn() {}

// 2.函数表达式(匿名函数)
var fun = function () {};

// 3.利用 new Function('参数1','参数2','函数体')
var f = new Function("a", "b", "console.log(a+b)");
f(1, 2);
console.dir(f); // 有__proto__ 属性 是实例对象
