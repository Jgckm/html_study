// 闭包（closure）指有访问里一个函数作用域的权限中变量的函数
// 闭包：我们fun 这个函数作用域 访问了另外一个函数  fn  里面的局部变量
// 一个作用域可以访问另一个作用域的局部变量
function fn() {
    var num = 10;
    function fun() {
        console.log(num);
    }
    fun();
}
fn();
