// 函数的调用方式

// 1.普通函数  this指向 window
function fn() {
  console.log("我是司机", this);
}
// fn(); // fn.call();

// 2.对象的方法 this指向的是对象o
var o = {
  jgckM: function () {
    console.log("人声巅峰", this);
  },
};
o.jgckM();

// 3.构造函数  this 指向 ldh 这个实例对象   原型对象 this 指的也是 ldh 对象实例
function Star() {}
Star.prototype.Sing = function () {};
var ldh = new Star();

// 4.绑定事件函数 this 指向的是函数的调用者 btn 这个按钮对象
btn.onclick = function () {
  console.log(this);
};

// 5.定时器函数 this 指向的是 window
window.setInterval(() => {
  console.log(this);
}, 1000); // 这个函数每隔1秒运行一次

// 6.立即执行函数 this 还是指向的 window
(function () {
  console.log("我是立即执行函数", this);
})();
