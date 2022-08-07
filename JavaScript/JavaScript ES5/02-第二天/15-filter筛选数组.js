var arr = [34, 45, 23, 12, 123, 123, 3, 34, 3, 43411, 22]
var newarr = arr.filter(function(value, index, array) {
    // return value >= 20;
    return value % 2 === 0;
})
console.log(newarr);

// 返回一个新的数组
// 把所有满足条件的的元素 返回回来 返回的是一个数组