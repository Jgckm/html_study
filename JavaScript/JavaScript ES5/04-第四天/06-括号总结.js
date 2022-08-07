// 中括号 字符集合.匹配括号中的任意字符
// var reg = /^[abc]$/;
// 也可以是 a 也可以是 b 也可以是 c     a || b || c
// 大括号  量词符 . 里面表示重复次数
var reg = /^(abc){3}$/;
console.log(reg.test('aaa'));
// 小括号 表示优先级
console.log(reg.test('abcabcabc'));
