<template lang=pug>
  div#posts
    p#words here are users' posts
</template>

<script>
  import api from '../api'

  export default {
    data () {
      return {

      }
    },
    async created () {
      //document.getElementById('words').innerHTML = 'hello there';

    },
    methods:{
      greet:function(name){
        alert('hello'+ name + 'welcome~');
      }

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
