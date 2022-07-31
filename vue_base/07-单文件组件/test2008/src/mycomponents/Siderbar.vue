<template>
    <div>
        <ul>
            <li v-for="data in datalist" :key="data.filmId">
                {{data.name}}
            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    // fetch('/maizuo.json').then(res => res.json()).then(res => {
    //   this.datalist = res.data.films
    // })
    axios.get('/maizuo.json').then(res => {
      this.datalist = res.data.data.films
    })
  }
}
</script>
<style lang="scss" scoped>
// scoped 独立的的css 作用域
    ul{
        li {
            background: #fff;
        }
    }
</style>
