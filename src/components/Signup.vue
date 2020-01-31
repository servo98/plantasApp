<template>
  <div class="container">
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <form onsubmit="return false" action="">
          <div class="field">
            <label class="label">Nombre</label>
            <div class="control">
              <input v-model="name" required="required" class="input" type="text" placeholder="Nombre" />
            </div>
          </div>
          <div class="field">
            <label class="label">Apellidos</label>
            <div class="control">
              <input required="required" class="input" type="text" placeholder="Apellidos" />
            </div>
          </div>
          <div class="field has-text-centered">
            <label class="label">Género</label>
            <div class="control has-text-centered ">
              <div class="select ">
                <select required>
                  <option selected >Selecciona uno</option>
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
              <input required="required" class="input" type="email" placeholder="correo@ejemplo.com" />
            </div>
          </div>
          <div class="field">
            <label class="label">Contraseña</label>
            <div class="control">
              <input required="required" class="input" type="password" placeholder="********" />
            </div>
          </div>
          <div class="field">
            <label class="label">Teléfono</label>
            <div class="control">
              <input required="required" class="input" type="text" placeholder="5512345678" />
            </div>
          </div>
          <div class="field">
            <label class="label">Fecha de nacimiento</label>
            <div class="control">
              <input required="required" class="input" type="date" />
            </div>
          </div>
          <div class="control has-text-centered">
            <button class="button is-primary" v-on:click="enviarForm">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Signup",
  data: function () {
    return {
      name: ''
    }
  },
  methods: {
    enviarForm() {

    }
  }
};
</script>