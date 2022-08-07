// call 方法

function fn(x, y) {
    console.log('我先要喝手磨咖啡');
    console.log(this.uname); // window
    console.log(x + y);
}

var o = {
    uname: '拉客户说'
};
// fn()
// 1. call 可以调用函数
// fn.call()

// 2.call()     可以改变这个函数的this指向  此时这个函数的 this 就指向了 o 这个对象 
fn.call(o, 1, 55)