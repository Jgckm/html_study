// 2. apply()  应用 运用的意思
var o = {
  uname: "ldh",
};
function fn() {
  console.log(this);
}
fn.apply(o);
// 1.也是调用函数 第二个是可以 改变数组内部的this指向
// 2.但是他的参数必须是数组(伪数组)
// 3. apply 的主要应用
// Math.max
var arr = [22, 4, 3, 2, 45453, 3322];
var max = Math.max.apply(null, arr);
var min = Math.min.apply(null, arr);
console.log(max, min);
