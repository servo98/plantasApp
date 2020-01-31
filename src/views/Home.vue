<template>
  <div class="home">
    home view
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  mounted: function() {
    // console.log(process.env)
  },
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
