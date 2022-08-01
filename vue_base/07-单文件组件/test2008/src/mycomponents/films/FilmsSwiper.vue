<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper'
// import Swiper and modules styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
export default {
  mounted () {
    new Swiper('.swiper-container', {
      autoplay: {
        delay: 2500,
        pauseOnMouseEnter: true, // 鼠标停放暂停自动播放
        disableOnInteraction: false // 如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
      },
      loop: true,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      },
      modules: [Navigation, Pagination, Autoplay]
    })
  }
}
</script>
<style>
.swiper-container {
  position: relative;
  width: 20.8333rem;
  overflow: hidden;
}
</style>
