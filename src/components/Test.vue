<template lang=pug>
  div#test
    div#navBar
      p 测试页面
    div#container
      div#self-test
        a 自我测验
      div#live-test
        a 课堂练习



</template>

<script>
  import api from '../api'

  export default {
    data () {
      return {

      }
    },
    async created () {

    },
    methods: {

    }
  }

</script>

<style lang=stylus>
  body
    font-family Helvetica Neue, Arial, sans-serif
  p
    text-align center
    color dodgerblue
    font-size 15px
    margin auto

   #container a
    text-align center
    color dodgerblue
    font-size 15px
    margin auto
  #navBar
    display flex
    align-items center
    margin 0 auto 20px
    width 100%
    height 100px
    text-align center
    position relative
    background-color antiquewhite
  #container
    border black solid thin
    display flex
    align-items center

  #self-test
    display flex
    align-items center
    margin auto
    border solid black thin
    width 40%
    height 150px
  #live-test
    display flex
    align-items center
    margin auto
    border solid black thin
    width 40%
    height 150px
</style>
