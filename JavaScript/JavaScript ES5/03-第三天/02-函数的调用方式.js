// 函数的调用方式

// 1.普通函数
function fn() {
  console.log("我是司机");
}
// fn()  fn.call();

// 2.对象的方法
var o = {
  jgckM: function () {
    console.log("人声巅峰");
  },
};
o.jgckM();

// 3.构造函数
function Star() {}
new Star();

// 4.绑定事件函数
// btn.onclick = function () {};

// 5.定时器函数
// setInterval(() => {}, 1000); // 这个函数每隔1秒运行一次

// 6.立即执行函数
(function () {
  console.log("我是立即执行函数");
})();
