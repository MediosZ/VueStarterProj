<template lang=pug>
  div#index
    div#router
      router-link#totest(to='/Test' style="color:blue;") 答题页面
      br
      router-link#toposts(to='/Posts' style="color:blue;") 专栏页面
    div#login
      p 登录
      input#username(placeholder='用户名/邮箱' type='text')
      br
      input#password(placeholder='请输入密码' type='password')
      br
      button#submit 登录


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

<style lang="stylus">
  p
    font-size 20px
    margin 0px

  #index
    text-align center
    display flex
    flex-direction column

  #router
    display flex

  #totest
    margin 0 auto

  #toposts
    margin 0 auto



  #login
    top 50%
    margin 50px
    display flex
    flex-direction column
    align-items center
    border solid black thin
  #username
    border solid black thin
  #password
    border solid black thin



  
</style>
