<template>
  <div class="container">
    <div class="control">
      <div class="columns is-half   is-vcentered">
        <input
          class="input column is-half "
          type="text"
          placeholder="Que planta buscas"
        />

        <button type="submit column" class="button is-primary ">Buscar</button>
      </div>
    </div>

    <div class="columns  is-multiline ">
      <div
        v-for="planta in plantas"
        :key="planta._id"
        class="column is-4 has-text-centered "
      >
        <br />
        <figure class="image is-4by3">
          <img
            :src="service_url+planta.image"
            alt="Placeholder image"
          />
        </figure>
        <p class="is-size-3">{{ planta.name }}</p>
        <p class="is-size-5">${{ planta.price }}</p>
        <br />
        <a class="button is-success is-7" v-on:click="addPlant(planta._id)"
          >Agregar al carrito</a
        >
        <br />
        <br />
        <a class="button is-success is-7  ">comprar ahora</a>
        <br />
        <br />
        <a class="button is-success is-7 "> +info</a>
        <br />
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import http from "../mixins/axios";
import noti from "../mixins/notifications";
export default {
  mounted() {
    this.pedirPlantas();
  },
  data: function() {
    return {
      plantas: []
    };
  },

  methods: {
    pedirPlantas() {
      this.getAxios("/plants").then(res => {
        this.plantas = res.data.plants;
      });
    },

    addPlant(id) {
      this.putAxios(`/trolleys/add/${id}`)
        .then(res => {
          this.sendSuccess('Listo!', `Se ha agregado el producto al tu carrito`);
        })
        .catch(error => {
          this.sendError('Error', 'Lo sentimos, ha ocurrido un erro al agregar esta planta a tu carrito');
        });
    }
  },
  mixins: [http, noti]
};
</script>
