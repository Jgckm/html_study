<template>
    <div>Login
        <button @click="handleLogin">登录</button>
    </div>
</template>
<script>
export default {
  methods: {
    handleLogin () {
      setTimeout(() => {
        localStorage.setItem('token', '后端返回的数据')
        //   this.$router.back() // 返回
        // 1.获取 query 字段
        // 2.跳转到当时要跳的页面
        this.$router.push(this.$route.query.redirect)
      }, 0)
    }
  }
}
</script>
