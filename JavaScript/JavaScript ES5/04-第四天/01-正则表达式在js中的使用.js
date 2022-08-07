// 利用 RegExp 对象来创建   正则表达式
var regexp = new RegExp(/123/);
console.log(regexp);
// 2.利用字面量创建 正则表达式
var rg = /1234/;
console.log(rg.test(1234));
console.log(rg.test('sbb'));
