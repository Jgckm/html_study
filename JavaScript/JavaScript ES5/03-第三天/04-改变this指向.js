// 改变this指向 js 提供3个方法  call() apply()  bind()

// 1.call()
var o = {
  uname: "ddfew",
};
function fn(a, b) {
  console.log(this);
  console.log(a + b);
}
fn.call(o, 1, 2);
// call 第一个可以调用函数  第二个可以改变函数内的 this 的指向
// call 主要作用是可以实现继承
function Father(uname, age, sex) {
  this.uname = uname;
  this.age = age;
  this.sex = sex;
}
function Son(uname, age, sex) {
  Father.call(this, uname, age, sex);
}
var son = new Son("李华", "55", "未知");
console.log(son);
