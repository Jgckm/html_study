window.addEventListener('load', function() {
    var focus = document.querySelector('.focus');
    var ul = focus.querySelector('ul')
    var ol = focus.querySelector('ol')

    // 获取focus的宽度
    var w = focus.offsetWidth;
    var index = 0; // 图片序号  -1 0 1 2 3
    var timer = null;
    Runtime();
    // 定时器函数
    function Runtime() {
        timer = setInterval(() => {
            index++
            var translatex = -index * w;
            ul.style.transition = '0.4s cubic-bezier(0, 0.61, 0.84, 1.04)';
            ul.style.transform = `translateX(${translatex}px)`
        }, 2000);
    }
    // 等着我们过渡完成之后，再去判断 监听多过渡完成事件 transitionend
    ul.addEventListener('transitionend', function() {
        if (index >= 3) {
            index = 0;
            // 清除过渡
            ul.style.transition = 'none';
            // 重新计算移动距离
            var translatex = -index * w;
            ul.style.transform = `translateX(${translatex}px)`
        } else if (index < 0) {
            index = 2;
            // 清除过渡
            ul.style.transition = 'none';
            // 重新计算移动距离
            var translatex = -index * w;
            ul.style.transform = `translateX(${translatex}px)`
        }
        // 3.小圆点变化
        // 把ol里面的li 带有current  类名的选出来去掉类名 remove
        ol.querySelector('.current').classList.remove('current');
        ol.children[index].classList.add('current')
    })

    // 手指滑动轮播图
    // 触摸元素 touchstart
    var starX = 0;
    var moveX = 0;
    var flag = false;
    ul.addEventListener('touchstart', function(e) {
        clearInterval(timer)
        starX = e.targetTouches[0].pageX
    });
    ul.addEventListener('touchmove', function(e) {

        // 计算移动距离
        moveX = e.targetTouches[0].pageX - starX;
        // 盒子原来的位置 + 手指移动的距离
        var translatex = -index * w + moveX;
        // 手指移动不需要过渡
        ul.style.transition = 'none';
        ul.style.transform = `translateX(${translatex}px)`
        e.preventDefault() // 阻止页面滚动行为
        flag = true
    });
    // 手指离开
    ul.addEventListener('touchend', function(e) {
        if (flag) {
            if (Math.abs(moveX) > 60) {
                if (moveX > 0) {
                    index--;
                } else {
                    index++
                }
                var translatex = -index * w;
                ul.style.transition = '0.4s cubic-bezier(0, 0.61, 0.84, 1.04)';
                ul.style.transform = `translateX(${translatex}px)`
            } else {
                var translatex = -index * w;
                ul.style.transition = '0.2s cubic-bezier(0, 0.61, 0.84, 1.04)';
                ul.style.transform = `translateX(${translatex}px)`
            }
            clearInterval(timer)
            Runtime()
        }
        flag = false;
    });
    // 返回顶部
    var goBack = document.querySelector('.goBack');
    var nav = document.querySelector('nav')
    window.addEventListener('scroll', function() {
        if (window.scrollY >= nav.offsetTop) {
            goBack.style.display = 'block';
        } else {
            goBack.style.display = 'none';
        }
    });
    goBack.addEventListener('click', function() {
        window.scroll(0, 0)
    });
})