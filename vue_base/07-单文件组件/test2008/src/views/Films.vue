<template>
    <div>
        <films-swiper key="datalist.length">
            <films-swiper-item v-for="data in datalist" :key="data.id">
                <img :src="data.url" :alt="data.utag" >
            </films-swiper-item>
        </films-swiper>
        <div>
            二级声明式导航
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import filmsSwiper from '@/mycomponents/films/FilmsSwiper'
import filmsSwiperItem from '@/mycomponents/films/FilmsSwiperItem'
import axios from 'axios'
export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    //   setTimeout(() => {
    // //   this.datalist = ['1111', '22222', '333333']
    //     console.log(res.data.data.list)
    // }, 1000)
    axios.get('/jgckM/index.php?c=WallPaper&a=getAppsByOrder&order=create_time&start=0&count=3&from=360chrome').then(res => {
      this.datalist = res.data.data
    })
  },
  components: {
    filmsSwiper,
    filmsSwiperItem
  }
}
</script>
<style lang="scss" scoped>
img{
    width: 20.8333rem;
}
</style>
