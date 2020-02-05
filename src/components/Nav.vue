<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
      </a>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarspecial" class="navbar-menu">
      <div class="navbar-start">
      
      <div class="navbar-item has-dropdown is-hoverable">
        <a class=" navbar-link">Green House</a>
        <div class="navbar-dropdown">
            <a class="navbar-item">Plants</a>
            <a class="navbar-item">Tools</a>
        </div>
      </div>
        
         <a class="navbar-item">Tu planta ideal</a>
        <a class="navbar-item">La planta que quieras</a>

       
      </div>
    </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link to="/signup" class="button is-primary">
              Sign up
            </router-link>
            <router-link to="/login" class="button is-light">
              Log in
            </router-link>
          </div>
        </div>
      </div>
   
  </nav>
  
</template>

<script>
import axios from "../mixins/axios";
export default {
  data: function () {
    return {
      logged: localStorage.token
    }
  },
  watch: {
    $route(to, trom){
      this.logged = localStorage.token != undefined 
    }
  },
  mixins: [axios],
  methods: {
    login() {
    }
  }
};
</script>