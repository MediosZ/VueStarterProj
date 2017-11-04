<template lang=pug>
  div#test
    p hello world
    p this is a template
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

<style >
  body {
    font-family: Helvetica Neue, Arial, sans-serif;
  }

  polygon {
    fill: #42b983;
    opacity: .75;
  }

  circle {
    fill: transparent;
    stroke: #999;
  }

  text {
    font-family: Helvetica Neue, Arial, sans-serif;
    font-size: 10px;
    fill: #666;
  }

  label {
    display: inline-block;
    margin-left: 10px;
    width: 20px;
  }

  p {

    text-align:center;
    color: dodgerblue;
    font-size:15px;
    margin:auto;

  }
</style>
