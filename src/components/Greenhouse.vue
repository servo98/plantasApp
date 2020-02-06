<template>
  <div class="container">
    <div class="control">
    <div class='media-right'>
     <div class='media-right'>
      <div class='media-right'>
       <div class='media-right'>
       <div class='media-right'>
       <div class='media-right'>
       <div class='media-right'>
       <div class='media-right'>
       <div class='media-right'>
       <div class='media-right'>
      <div class="columns column is-half is-offset-one-quarter ">
        <input
          class="input column is-half "
          type="text"
          placeholder="Que planta buscas"
        />
    
        <button type="submit column" class="button is-primary ">Buscar</button>
        </div>
         </div>
         </div>
         </div>
         </div>
         </div>
         </div>
         </div>
         </div>
         </div>
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
            src="https://bulma.io/images/placeholders/1280x960.png"
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
        <router-link :to="'/plantinfo/'+planta._id" class="button is-success is-7 "> +info</router-link >
        <br />
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import http from "../mixins/axios";
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
      this.getAxios("plants").then(res => {
        this.plantas = res.data;
      });
    },

    addPlant(id) {
      this.getAxios("/trolleys/trolleyByUser/" + localStorage.id).then(res => {
        console.log(res);
        this.putAxios("trolleys/" + trolley.id + "/add" + id)
          .then(res => {
            trolley.push(id);
          })
          .catch(error => {
            console.log(error);
          });
      });
    }
  },
  mixins: [http]
};
</script>
