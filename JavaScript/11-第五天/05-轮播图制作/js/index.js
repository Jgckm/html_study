// 1.鼠标经过轮播图模块,左右按钮显示,离开隐藏左右按钮。
// 2.点击右侧按钮一次,图片往左播放一张,以此类推,左侧按钮同理。
// 3.图片播放的同时,下面小圆圈模块跟随一起变化。
// 4.点击小圆圈 ,可以播放相应图片。
window.addEventListener('load', function() {
    var arrowl = document.querySelector('.arrow-l');
    var arrowr = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');

    // 鼠标经过
    focus.addEventListener('mouseover', function() {
        arrowr.style.display = 'block'
        arrowl.style.display = 'block'
        clearInterval(timer)
        timer = null;
    });
    // 鼠标离开
    focus.addEventListener('mouseout', function() {
        arrowr.style.display = 'none';
        arrowl.style.display = 'none';
        timer = setInterval(() => {
            arrowr.click()
        }, 3000);
    });


    // 动态生成小圆圈
    // 核心思路:小圆圈的个数要跟图片张数-致
    // 所以首先先得到u里面图片的张数(图片放入i里面，所以就是li的个数)
    // 利用循环动态生成小圆圈(这个小圆圈要放入ol里面)
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    var focusWidth = focus.offsetWidth; // 每个图片的宽度

    // 创建小圆圈
    for (var i = 0; i < ul.children.length; i++) {
        // 创建一个 li
        var li = document.createElement('li');
        // 设置自定义属性
        li.setAttribute('index', i);
        ol.appendChild(li);

        li.addEventListener('click', function() {
            // 排他思想
            // 添加类名
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current'

            // 点击小圆圈移动图片
            // ul 的移动距离  小圆圈的索引号 乘以 图片宽度  注意是负值
            // 获取自定义属性的值
            var index = this.getAttribute('index');
            // 当我们点击了某个小 li 就要把这个 li  的索引值给 num
            num = index;
            // 当我们点击了某个小 li 就要把这个 li  的索引值给 circle
            circle = index;

            animate(ul, -index * focusWidth);
        })

    }
    // ol里面的小li 设置类名 为 current
    ol.children[0].className = 'current';
    // 克隆第一张图片
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    // 点击右侧按钮 图片滚动
    var num = 0;

    // circle 控制小圆圈
    var circle = 0;
    // flag 节流阀
    var flag = true;
    arrowr.addEventListener('click', function() {
        // 如果做到最后复制的那一张图 此时我们的ul 要快速的复原 left 改为 0
        if (flag) {
            flag = false; // 关闭节流阀
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focusWidth, function() {
                flag = true
            });
            circle++;
            if (circle == ol.children.length) {
                circle = 0;
            }
            // 清除全部小圆圈
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            };
            // 留下当前的小圆圈
            ol.children[circle].className = 'current';
        }

    });
    arrowl.addEventListener('click', function() {
        // 如果做到最后复制的那一张图 此时我们的ul 要快速的复原 left 改为 0
        if (flag) {
            flag = false;
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focusWidth + 'px';
            }
            num--;
            animate(ul, -num * focusWidth, function() {
                flag = true;
            });
            circle--;
            if (circle < 0) {
                circle = ol.children.length - 1;
            }
            // 清除全部小圆圈
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            };
            // 留下当前的小圆圈
            ol.children[circle].className = 'current';
        }

    });

    // 自动轮播
    var timer = setInterval(() => {
        arrowr.click()

    }, 3000);

    // 

});