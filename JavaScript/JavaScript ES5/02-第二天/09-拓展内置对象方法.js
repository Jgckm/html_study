// 原型对象的应用   拓展内置方法
// console.log(Array.prototype);

Array.prototype.sum = function() {
    var num = 0;
    for (var i = 0; i < this.length; i++) {
        num += this[i]
    }
    return num;
};

// 不能想下面的这个方法写
// Array.prototype = {
//     sum: function() {
//         var sum = 0;
//         for (var i = 0; i < this.length; i++) {
//             sum += this[i]
//         }
//         return sum;
//     }
// }

var arr = [1, 2, 34, 54, 5];
console.log(arr.sum());
console.log(Array.prototype);

// 第二种方法
var arr1 = new Array(12, 34, 5, 3, 2);
console.log(arr1.sum());