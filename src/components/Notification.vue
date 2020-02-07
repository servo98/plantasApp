<template>
  <div :class="'notification is-'+type" v-if="show">
    <button class="delete" v-on:click="v => this.$emit('closeNotification')"></button>
    <h5 class="subtitle is-5">{{title}}</h5>    
    {{text}}
  </div>
</template>
<script>
export default {
    name: 'Notification',
    props: {
        show: {
            type: Boolean,
            default: false
        },
        text: String,
        type: {
            type: String,
            default: 'info'
        },
        title: String
    },
    methods: {
        
    },

};
</script>