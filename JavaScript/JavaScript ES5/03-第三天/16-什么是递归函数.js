// 递归函数：函数内部调用自己，这个函数就是递归函数
var num = 0;
function fn() {
    if (num == 6) {
        return; // 必须加return退出递归
    }
    console.log(`我要打印${num}句话`);
    num++;
    fn();
}
fn();
