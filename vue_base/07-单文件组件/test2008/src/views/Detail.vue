<template>
    <div>
        detail
    </div>
</template>
<script>
export default {
  created () {
    // 当前匹配的路由
    console.log('created', this.$route.params.id)
  }

}
</script>
