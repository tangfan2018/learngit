<template>
  <div class="goods">
    <v-header></v-header>
    <div class="linkBar">
      <!-- <router-link to= 'goods'>goods</router-link>
      <router-link to= 'ratings'>ratings</router-link>
      <router-link to= 'stores'>stores</router-link> -->
      <div></div>
    </div>
    <div class="displayPage"></div>
    <div class="chargeBar"></div>
  </div>
</template>

<script>
import header from './header'
export default {
  props:{
    seller:{
      type:Object
    }
  },
  components:{
    'v-header':header
  }
}
</script>
<style scoped>
@import url('../../static/style.css');
</style>
