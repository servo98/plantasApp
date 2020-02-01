<template>
  <div class="container">
    <div class="columns is-mobile">
      <div class="column is-6 is-offset-3">
        <form onsubmit="return false" action>
          <div class="field">
            <label class="label">Nombre</label>
            <div class="control">
              <input
                v-model="firstName"
                required="required"
                class="input"
                type="text"
                placeholder="Nombre"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Apellidos</label>
            <div class="control">
              <input
                v-model="lastname"
                required="required"
                class="input"
                type="text"
                placeholder="Apellidos"
              />
            </div>
          </div>
          <div class="field has-text-centered">
            <label class="label">Género</label>
            <div class="control has-text-centered">
              <div class="select">
                <select v-model="gender" required>
                  <option selected>Selecciona uno</option>
                  <option value="male">Masculino</option>
                  <option value="female">Femenino</option>
                  <option value="other">Otro</option>
                </select>
              </div>
            </div>
          </div>
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
          <div class="field">
            <label class="label">Teléfono</label>
            <div class="control">
              <input
                v-model="phone"
                required="required"
                class="input"
                type="text"
                placeholder="5512345678"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Fecha de nacimiento</label>
            <div class="control">
              <input v-model="birthday" required="required" class="input" type="date" />
            </div>
          </div>
          <div class="control has-text-centered">
            <button class="button is-primary" v-on:click="enviarForm">Registrarse</button>
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
      firstName: "",
      lastname: "",
      gender: "",
      email: "",
      password: "",
      phone: "",
      birthday: ""
    };
  },
  methods: {
    enviarForm() {
      this.postAxios("/users", {
        firstName: this.firstName,
        lastname: this.lastname,
        gender: this.gender,
        email: this.email,
        password: this.password,
        phone: this.phone,
        birthday: this.birthday
      }).then(res => {
        this.$router.push("/login");
      });
    }
  },
  mixins: [http]
};
</script>