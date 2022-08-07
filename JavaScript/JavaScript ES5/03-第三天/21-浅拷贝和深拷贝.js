var obj = {
    id: 1,
    uname: 'ldh',
    msg: {
        age: 88,
    },
};
var o = {};
function deepCopy(newobj, oldobj) {
    for (var k in oldobj) {
        // 判断属性值属于哪一种数据类型
        // 1.获取属性值
        var item = oldobj[k];
        // 2.判断是否为数组
        if (item instanceof Array) {
            newobj[k] = [];
            deepCopy(newobj[k], item);
        } else if (item instanceof Object) {
            // 3.判断是否是对象
            newobj[k] = {};
            deepCopy(newobj[k], item);
        } else {
            // 4.属性简单数据类型
            newobj[k] = item;
        }
    }
}
deepCopy(o, obj);
console.log(o);

var arr = [];
console.log(arr instanceof Object); // 数组也属于Object
