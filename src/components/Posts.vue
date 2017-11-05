<template lang=pug>
  div#posts
    div#navBar
      p#img img
      p 专栏文章
    div#container
      p this is the main Container for posts
    div#footer
      p this is the bottom of the page

</template>

<script>
  import api from '../api'

  export default {
    data (){
      return {
        counter : 0,
        times :0

      }
    },
    async created () {
      //document.getElementById('words').innerHTML = 'hello there';

    },
    methods:{
      greet:function(){
        alert('hello welcome~');
      }

    },
    props:['message']
  }

</script>

<style lang=stylus>
  body
    font-family: Helvetica Neue, Arial, sans-serif;

  p
    text-align center
    color dodgerblue
    font-size 15px
    margin auto

  #img
    margin 10px
    float left
    width 70px
    height 70px
    border solid black

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
    display flex
    justify-content center
    margin 0 auto 20px
    width 85%
    height 200px
    background-color #6afff3

  #footer
    display flex
    justify-content center
    margin 0 auto
    width 85%
    height 50px
    background-color aquamarine
</style>
