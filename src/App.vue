<template>
  <div id="app">
    <div id="nav">
      <Nav/>
             <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>

    </div>
    <router-view/>
  </div>
</template>
<script>
import Nav from '@/components/Nav.vue'
export default {
  name: 'app',
  data: function() {
      return {
          cosa:'esoeqweq'
      }
  },
  methods:{
    login() {
      let d = new Date();                
      d.setTime(d.getTime() + (1*24*60*60*1000));
      let expires = "expires="+ d.toUTCString();
      document.cookie = 'eose;'+ expires + ";path=/";
    }
    
  },
  components: {
    Nav
  }
}
</script>