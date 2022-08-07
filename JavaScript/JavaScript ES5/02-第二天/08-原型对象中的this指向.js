function Star(uname, age) {
    this.uname = uname;
    this.age = age;
};
var that;
Star.prototype.sing = function() {
    that = this;
    console.log('我会唱歌');
};

var ldh = new Star('刘德华', 15);
var shias = new Star('是阿瑟', 335);
// 1.在构造函数中，里面的this指向的是对象实例 ldh
ldh.sing();
console.log(that);
// 2.原型对象函数里的this 指向的是 实例对象 ldh