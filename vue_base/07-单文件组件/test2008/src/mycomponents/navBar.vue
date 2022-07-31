<template>
    <div>
        <button @click="hanleLeft">left</button>
        {{myname}}
        <button v-show="myright" >right</button>
        <slot></slot>
    </div>
</template>
<script>
export default {
  props: {
    myname: {
      type: String,
      defuale: ''
    },
    myright: {
      type: Boolean,
      defuale: true
    }
  },
  methods: {
    hanleLeft () {
      this.$emit('event')
    }
  }

}
</script>
<style lang="scss" scoped>
   div{
    background-color: gray;
   }
</style>
