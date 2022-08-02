<template>
  <div class="swiper-container" :class="name">
    <div class="swiper-wrapper">
      <slot></slot>
      </div>
</div>
</template>
<script>
import Swiper from 'swiper'
// import Swiper and modules styles
import 'swiper/css'
export default {
  props: {
    perview: {
      type: Number,
      default: 1
    },
    name: {
      type: String,
      default: ''
    }
  },
  mounted () {
    new Swiper('.' + this.name, {
      slidesPerView: this.perview,
      spaceBetween: 15,
      freeMode: true
    })
  }

}
</script>
