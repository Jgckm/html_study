// forEach (迭代)遍历数组 
var arr = [12, 3, 4234, 234, 234, 123, 3, 43, 23]
var sum = 0;
arr.forEach(function(value, index, array) {
    // console.log('每个数组元素' + value);
    // console.log('每个数组元素的索引号' + index);
    // console.log('数组本身' + array);
    sum += value
})
console.log(sum);