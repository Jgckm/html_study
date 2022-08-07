// 浅拷贝只是拷贝一层，更深层次对象级别的只拷贝引用
// 深拷贝多层 ， 每一级别的数据都会被拷贝
// 浅拷贝
var obj = {
    id: 1,
    uname: 'ldh',
    msg: {
        age: 88,
    },
};
var o = {};

for (var key in obj) {
    o[key] = obj[key];
}
// console.log(o);
// o.msg.age = 20;
// console.log(obj);
// console.log(o);

Object.assign(o, obj);
console.log(o);
