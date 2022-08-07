// 字符类

var rg = /[abc]/;
// [] 表示有一系列字符可提供选择，只要 匹配其中一个就可以了
console.log(rg.test('addy')); // 只要包含a 包含有b 或者包含有 c 都返回为 true
console.log(rg.test('bady'));
console.log(rg.test('color'));
console.log(rg.test('red'));
var rg1 = /^[abc]$/; // 三选一 只有 a 或者是 b 或者是 c 这三个字母才返回 true
console.log(rg1.test('as')); // false
console.log(rg1.test('aas s')); // false
console.log('---------------------------');

var reg = /^[a-z]$/; // 26个字母任意一个小写字母 返回true
console.log(reg.test('a')); // true
console.log(reg.test('z')); // true
console.log(reg.test(1)); // false

// 字符组
var reg = /^[a-zA-Z0-9_-]$/; // 26个字母任意一个（小写或者大写字母） 返回true
console.log(reg.test('a'));
console.log(reg.test('A'));
console.log(reg.test('_'));
console.log(reg.test('-'));
console.log(reg.test('!')); // false
console.log('----------------------------------');

var reg = /^[^a-zA-Z0-9_-]$/; // 在中括号里面的尖括号 ^ 表示 取反的意思
console.log(reg.test('a'));
console.log(reg.test('A'));
console.log(reg.test('_'));
console.log(reg.test('-'));
console.log(reg.test('!')); // false
