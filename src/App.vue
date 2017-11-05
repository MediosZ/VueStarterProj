<template lang='pug'>
  div#app
    vue-loading(:is-show='isLoading' toast-text='请稍候')
    router-view
</template>

<script>
  import logger from './logger'
  import vueLoading from 'vue-componnet-loading'

  export default {
    name: 'app',
    components: {
      vueLoading
    },
    data() {
      return {
        isLoading: false
      }
    },
    async created () {
      logger.bindXhrOpen(() => this.isLoading = true)
      logger.bindXhrDone(() => this.isLoading = false)
      logger.bindAjax()
    },
    methods: {

    }
  }
</script>

<style lang='stylus'>
  *
    font-family 'PingFang SC', 'Microsoft YaHei UI', sans-serif

  html, body
    margin 0
    padding 0

  p
    margin-top 0
    margin-bottom 0
    line-height 1.75em

  a, a:link, a:hover, a:active, a:focus, a:visited
    color inherit
    text-decoration none
    -webkit-appearance none

  button, input
    outline none
    border none

  input, input:focus
    -webkit-appearance none

  .js-toast-container
    position fixed !important
</style>
