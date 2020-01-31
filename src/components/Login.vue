<template>
  <div class="container">
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <form onsubmit="return false" action>
          <div class="field">
            <label class="label">Correo</label>
            <div class="control">
              <input v-model="email" required="required" class="input" type="email" placeholder="correo@ejemplo.com"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Contraseña</label>
            <div class="control">
              <input v-model="password" required="required" class="input" type="password" placeholder="********" />
            </div>
          </div>
          <div class="control has-text-centered">
            <button class="button is-primary" v-on:click="enviarForm">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import http from "../mixins/axios";
export default {
  name: "Signup",
  data: function() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    enviarForm() {
      this.postAxios("/auth/login", {
        email: this.email,
        password: this.password
      }).then(res => {
        // this.$router.push("/login");
        localStorage.token = res.data.token
        this.login(localStorage.token)
        this.$router.push('/')
      });
    }
  },
  mixins: [http]
};
</script>