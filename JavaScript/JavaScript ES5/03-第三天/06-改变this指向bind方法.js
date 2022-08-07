var o = {
  uname: "bind",
};
function fn(a, b) {
  console.log(this);
  console.log(a + b);
}
var f = fn.bind(o, 1, 2);
f();
// 1.不调用函数     可以改变原函数的this指向
// 2.返回的是原函数改变this之后产生的新函数
// 3.如果有函数我们不需要调用，但是我有想改变这个函数的this指向此时用bind
// 4.我们有一个按钮，当我们点击之后，就想禁用这个按钮，3秒之后在开启这个按钮
