// 借用父构造函数继承属性
// 1.父构造函数
function Father(uname, age) {
    // this 指向父构造函数实例
    this.uname = uname;
    this.age = age;
}
Father.prototype.money = function() {
    console.log(100000);
};
// 2.子构造函数
function Son(uname, age) {
    // this 指向的是构造函数的对象实例
    Father.call(this, uname, age);
}
Son.prototype.exam = function() {
    console.log('孩子要考试');
};
// Son.prototype = Father.prototype;  这样直接赋值会有问题，如果改变了子原型队形 父原型对象也会改变
Son.prototype = new Father();
// 如果利用对象的形式修改了原型对象，别忘了利用contructor 指回来
Son.prototype.contructor = Son;
var son = new Son('张三', 77);
console.log(son);
console.log(Father.prototype);