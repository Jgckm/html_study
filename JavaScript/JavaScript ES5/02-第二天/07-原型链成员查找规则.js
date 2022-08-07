function Star(uname, age) {
    this.uname = uname;
    this.age = age;
}
Star.prototype.sing = function() {
    console.log('我会唱歌');
}
var ldh = new Star('廊坊市', 45);
ldh.sex = '男' // 优先访问 对象原型
Star.prototype.sex = '人妖' // 如果 对象原型没有这个属性或者方法 那么就去 原型对象去寻找这个 属性和方法
    // Object.prototype.sex = '人妖' // 如果 原型对象没有这个属性或方法 就去 Object 去找属性和方法 如果在没有就返回 undefined 
console.log(ldh.sex);
// 就近原则 如果对象原型有这个属性和方法 就不再查找
console.log(ldh.toString());