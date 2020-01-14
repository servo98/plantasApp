<template>
  <div class="hello">
    <h1>{{ msg }} {{ cosa }}</h1>
  
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function(){
    return {
      cosa:'eso'
    }
  }

}
</script>
