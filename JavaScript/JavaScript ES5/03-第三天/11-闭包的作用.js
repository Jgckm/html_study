// 闭包的作用：延伸了变量的作用范围
function fn() {
    var num = 10;
    // function fun() {
    //     console.log(num);
    // }
    // return fun;
    return function () {
        console.log(num);
    };
}

var f = fn();
f();
