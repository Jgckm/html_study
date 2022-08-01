<template>
    <div class="swiper-container">
                <div class="swiper-wrapper">
                    <slot></slot>
                </div>
            </div>
</template>
<script>
var a = 111
export default {
  mounted () {
    new Swiper('.swiper-container', {
      autoplay: true,
      autoplay: {
        delay: 2500,
        pauseOnMouseEnter: true, // 鼠标停放暂停自动播放
        disableOnInteraction: false // 如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
      },
      loop: this.loop,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
  }
}
</script>
