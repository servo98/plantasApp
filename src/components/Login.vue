<template>
  <div class="container">
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <form onsubmit="return false" action>
          <div class="field">
            <label class="label">Correo</label>
            <div class="control">
              <input required="required" class="input" type="email" placeholder="correo@ejemplo.com"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Contraseña</label>
            <div class="control">
              <input required="required" class="input" type="password" placeholder="********" />
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
export default {
  name: "Login",
  data: function() {
    return {
      name: ""
    };
  },
  methods: {
    enviarForm() {}
  }
};
</script>