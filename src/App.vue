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
  components: {
    Nav
  }
}
</script>