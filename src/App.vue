<template>
  <div class="conteainer">
    <NavComp/>
    <router-view></router-view>
  </div>
</template>

<script>
import NavComp from './components/Nav.vue'

export default{
name: 'App',
components:{
  NavComp,
  
}

}



</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FF8B00;
  
  
}

.conteainer{
  background-color:#1047A9 ;
  display: flex;
  flex-direction:column ;
  align-items: center;
  height: 1000px;
}
</style>