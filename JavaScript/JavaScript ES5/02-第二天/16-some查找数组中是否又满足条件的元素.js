var arr = [12, 34, 45, 324, 3]
var flag = arr.some(function(value, index, array) {
    return value >= 20;
})
console.log(flag);
// 查找数组中是否又满足条件的 返回 布尔值
// 如果只要满足一个条件的元素就停止循环不再判断