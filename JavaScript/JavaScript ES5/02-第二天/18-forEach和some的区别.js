var arr = ['read', 'pink', 'black', 'duck', 'green'];


// 直到循环结束 才停止循环
// arr.forEach(function(value) {
//     if (value == 'duck') {
//         console.log('找到了');
//         return true;
//     }
//     console.log(22);
// })


// 只要找到一个符合条件单就停止循环
arr.some(function(value) {
    if (value == 'duck') {
        console.log('找到了');
        return true;
    }
    console.log(22)
});
arr.filter(function(value) {
    if (value == 'duck') {
        console.log('找到了');
        return true; // 不会终止
    }
    console.log(22)
});