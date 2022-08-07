// ES6之前通过构造函数+原型实现面向对象 编程
// (1) 构造函数有原型对象prototype
// (2) 构造函数原型对象 prototype 里面有 constructor 指向构造函数本身
// (3) 构造函数可以通过原型对象添加方法
// (4) 构造函数创建的实例对象有__proto__ 原型指向 构造函数的原型对象
// ES6通过 类 来实现面对对象

class Star {


}
console.log(typeof Star);
// 1.类的本质其实是一个函数 我们也可以简单的认为  类就是    构造函数的另一种写法
// (1) 类有原型对象prototype
console.log(Star.prototype);
console.log(Star.prototype.constructor);
// (2) 类也可以通过原型对象添加方法
Star.prototype.sing = function() {
    console.log('卡视角');
}
var ldh = new Star();
console.dir(ldh);
console.log(ldh.__proto__ === Star.prototype);