<template>
  <div>detail</div>
</template>
<script>
import http from '@/util/http'

export default {
  data () {
    return {
      moiveId: null
    }
  },
  created () {
    // 当前匹配的路由
    console.log('created', this.$route.params.id)
    this.moiveId = this.$route.params.id
  },
  mounted () {
    http.htppForList().then(
      (res) => {
        console.log(res.data.data.film)
      }
    )
  }
}
</script>
