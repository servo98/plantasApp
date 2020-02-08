<template>
  <div class="container">
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <div class="field">
          <label class="label">Correo</label>
          <div class="control">
            <input
              v-model="email"
              required="required"
              class="input"
              type="email"
              placeholder="correo@ejemplo.com"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Contraseña</label>
          <div class="control">
            <input
              v-model="password"
              required="required"
              class="input"
              type="password"
              placeholder="********"
            />
          </div>
        </div>
        <div class="control has-text-centered">
          <button id="submit" class="button is-primary" v-on:click="enviarForm">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from "../mixins/axios";
import noti from "../mixins/notifications";
export default {
  name: "Signup",
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    enviarForm() {
      this.postAxios("/auth/login", {
        email: this.email,
        password: this.password
      })
        .then(res => {
          this.sendSuccess('Bienvenido', '')
          // this.$router.push("/login");
          localStorage.token = res.data.token;
          localStorage.id = res.data.id;
          this.login(localStorage.token);
          this.$router.push("/");
        })
        .catch(error => {
          if (!error.response) {
            this.sendError('Servicio no disponible', error.toString())
          } else {
            this.sendError('Credenciales inválidas', error.response.data.message)
          }
        });
    }
  },
  mixins: [http, noti]
};
</script>