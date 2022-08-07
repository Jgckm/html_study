// 核心算法就是 :(目标值- 现在的位置) / 10 作为每次移动距离的步长
// 当盒子到达目标值就停止定时器
function animate(obj, target, callback) {
    // 当我们不断的点击按钮，这个元素的速度会越来越快，以为开起了太多的定时器
    // 解决的方法就是 让我们元素只有一个定时器
    clearInterval(obj.timer); // 想清楚已有的定时器再执行
    obj.timer = setInterval(() => {
        // 步长值写在定时器的里面       (目标值- 现在的位置) / 10 
        // 吧步长值改为整数 不要出现小数值
        // Math.ceil()  // 往上取整
        // var step = Math.ceil((target - obj.offsetLeft) / 10)
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        if (obj.offsetLeft == target) {
            // 停止定时器
            clearInterval(obj.timer);
            // 回调函数写在定时器里面
            // if (callback) {
            //     callback();
            // }
            callback && callback();
        }
        obj.style.left = obj.offsetLeft + step + 'px'
    }, 30);
}