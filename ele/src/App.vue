<template>
  <div id="app">
    <router-view :seller= "seller"></router-view>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'App',
  data(){
    return {
      seller:{}
    }
  },
  created(){
    axios.get('/good/seller').then(
      (res) =>{
        this.seller = res.data.data;
      }
    )    
  }
}

</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
