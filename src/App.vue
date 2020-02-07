<template>
  <div id="app">
    <div id="nav">
      <Nav/>
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <Notification :show="noti.show" :text="noti.text" :type="noti.type" :title="noti.title"/>
    <router-view @notificate="notification"/>
  </div>
</template>
<script>
import Nav from '@/components/Nav.vue'
import Notification from '@/components/Notification.vue'
export default {
  name: 'app',
  data: function() {
      return {
          noti: {
            title: '',
            type: '',
            text: '',
            show: false
          }
      }
  },
  methods:{
    login() {
      let d = new Date();                
      d.setTime(d.getTime() + (1*24*60*60*1000));
      let expires = "expires="+ d.toUTCString();
      document.cookie = 'eose;'+ expires + ";path=/";
    },
    notification(data) {
      this.noti = data;
      console.log('Holaaa');
    }
    
  },
  components: {
    Nav,
    Notification
  }
}
</script>