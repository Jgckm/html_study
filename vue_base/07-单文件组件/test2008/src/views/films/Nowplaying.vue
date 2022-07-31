<template>
    <div>nowplaying
        <ul>
            <li @click="handleChangePage(data)" v-for="data in datalist" :key="data">
                {{data}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  data () {
    return {
      datalist: ['1111', '2222', '223333']
    }
  },
  methods: {
    handleChangePage (id) {
      // 编程式导航
    //   location.href = `#/detail/${id}`
      // 1-通过路径跳转
    //   this.$router.push(`/detail/${id}`)
      // 2- 通过命名路由跳转
      this.$router.push({
        name: 'jgckMDetail',
        // 因为是动态路径所以需要 params 传递参数
        params: {
          id
        }
      })
    }
  }
}
</script>
