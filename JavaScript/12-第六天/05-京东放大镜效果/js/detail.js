// DOM 加载完毕在加载 js
window.addEventListener('load', function() {
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    var preview = document.querySelector('.preview_img');
    var bigImg = this.document.querySelector('.bigImg');

    // 鼠标经过显示   
    preview.addEventListener('mouseover', function() {
        mask.style.display = 'block';
        big.style.display = 'block';
    });
    // .鼠标离开不显示   
    preview.addEventListener('mouseout', function() {
        mask.style.display = 'none';
        big.style.display = 'none';
    });
    // 跟随鼠标
    preview.addEventListener('mousemove', function(e) {
        // 鼠标的X和Y坐标 - 大盒子的 = 盒子内的坐标
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        // x > 300 ? x = 300 : x;
        // 减去盒子高度是 300的一半  是150
        // mask移动的距离
        var markX = x - mask.offsetWidth / 2;
        var markY = y - mask.offsetHeight / 2;
        var maskMax = this.offsetHeight - mask.offsetHeight
        if (markX <= 0) {
            markX = 0
        } else if (markX >= maskMax) {
            markX = maskMax
        }
        if (markY <= 0) {
            markY = 0
        } else if (markY >= maskMax) {
            markY = maskMax
        }
        mask.style.left = markX + 'px'
        mask.style.top = markY + 'px'
        console.log(x, y);


        // 大图的移动距离 = 遮罩层移动距离 * 大图片的最大的移动距离  /  遮罩层的最大移动距离
        var bigMax = bigImg.offsetWidth - big.offsetWidth
        var bigX = -markX * bigMax / maskMax + 'px'
        var bigY = -markY * bigMax / maskMax + 'px'

        bigImg.style.left = bigX
        bigImg.style.top = bigY
    });
})