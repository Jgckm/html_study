// 边界符  ^ $
var rg = /abc/;
// /abc/ 只要包含有abc这个字符串返回都是true
console.log(rg.test('abc'));
console.log(rg.test('abcasd '));
console.log(rg.test('abcsdsaww'));
console.log('------------------------------');

var reg = /^abc/;
console.log(reg.test('abc')); // true
console.log(reg.test('abcasd ')); // true
console.log(reg.test('ssdabcsdsaww')); // false
console.log('------------------------------');

var reg1 = /^abc$/; // 精确匹配 要求必须是  abc 字符串才符合规范
console.log(reg1.test('abc')); // true
console.log(reg1.test('abcasd ')); // false
console.log(reg1.test('ssdabcsdsaww')); // false
console.log(reg1.test('abcabc')); // false
