// 量词符：用来设定某个模式出现的次数
// 简单理解：就是让下面的 a 这个支付重复多少次
var reg = /^a$/;

// * 相当于 >=0 可以出现0次或者很多次
var reg = /^a*$/;
// console.log(reg.test('')); // true
// console.log(reg.test('a')); // true
// console.log(reg.test('aaaa')); // true

//  + 相当于 >= 1 可以出现 1次 或者可以出现很多次
// var reg = /^a+$/;
// console.log(reg.test('')); // false
// console.log(reg.test('a')); // true
// console.log(reg.test('aaaa')); // true
// console.log(reg.test('aaaas')); // false

// ? 相当于 1 || 0
// var reg = /^a?$/;
// console.log(reg.test('')); // true
// console.log(reg.test('a')); // true
// console.log(reg.test('aaaa')); // false
// console.log(reg.test('aaaas')); // false

// {3 } 就是重复3次
// var reg = /^a{3}$/;
// console.log(reg.test('')); // false
// console.log(reg.test('a')); // false
// console.log(reg.test('aaa')); // true
// console.log(reg.test('aaaas')); // false

// {3, }     大于等于3
// var reg = /^a{3,}$/;
// console.log(reg.test('')); // false
// console.log(reg.test('a')); // false
// console.log(reg.test('aaa')); // true
// console.log(reg.test('aaaaaaa')); // true

//  {3,16}  大于等于3 并且 小于等于 16
var reg = /^a{3,6}$/;
console.log(reg.test('')); // false
console.log(reg.test('a')); // false
console.log(reg.test('aaa')); // true
console.log(reg.test('aaaaa')); // true
