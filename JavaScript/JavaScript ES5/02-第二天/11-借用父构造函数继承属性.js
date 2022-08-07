// 借用父构造函数继承属性
// 1.父构造函数
function Father(uname, age) {
    // this 指向父构造函数实例
    this.uname = uname;
    this.age = age;
}
// 2.子构造函数
function Son(uname, age) {
    // this 指向的是构造函数的对象实例
    Father.call(this, uname, age);

}
var son = new Son('张三', 77);
console.log(son);