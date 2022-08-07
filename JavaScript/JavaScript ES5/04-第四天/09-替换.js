// 替换  replace

var str = 'andy和array';
// var newStr = str.replace('andy', 'pink');
var newStr = str.replace(/andy/g, 'pink');
console.log(newStr);
// 第一个参数可以直接写 正则表达式
//  /g 全局匹配  /i 忽略大小写
