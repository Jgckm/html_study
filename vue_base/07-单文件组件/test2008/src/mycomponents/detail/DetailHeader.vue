<template>
    <div>
        <i @click="handleBack" class="fa fa-angle-left" aria-hidden="true"></i>
        <slot></slot>
    </div>
</template>
<script>
export default {
  methods: {
    handleBack () {
      this.$router.back() // 返回上一个页面
    }
  }
}
</script>
<style lang="scss" scoped>
div{
    position: fixed;
    top: 0;
    left: 0;
    height: 2.4444rem;
    width: 100%;
    background-color: #fff;
    text-align: center;
    line-height: 2.4444rem;
    i{
    float: left;
    height: 2.4444rem;
    font-size: 32px;
    line-height: 2.4444rem;
    position: fixed;
    top: 0;
    left: .5556rem;
}
}

</style>
