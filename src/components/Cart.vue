<template>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Imagen</th>
          <th>Precio</th>
          <th>Quitar del carrito</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cartItem in cartItems" :key="cartItem._id">
          <td>{{cartItem.name}}</td>
          <td>
            <figure class="image is-128x128">
              <img :src="service_url+cartItem.image" alt="Placeholder image" />
            </figure>
          </td>
          <td>
            $
            <span>{{cartItem.price}}</span>
          </td>
          <td class="has-text-centered">
            <button class="button is-danger" v-on:click="borrar(cartItem._id)">
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import http from "../mixins/axios";
import noti from "../mixins/notifications";

export default {
  mounted() {
    console.log("arre");
    this.pedirCarrito();
  },
  data: function() {
    return {
      cartItems: []
    };
  },
  methods: {
    borrar(id) {
      this.deleteAxios()
        .then(trolley => {

        })
        .catch(error => {
            
        });
      this.cartItems.forEach((plant, index) => {
        if (plant._id == id) {
          this.cartItems.splice(index, 1);
        }
      });
      //TODO: Delete plant from cart
    },
    pedirCarrito() {
      this.getAxios("/trolleys/me")
        .then(response => {
          console.log(response.data);
          this.cartItems = response.data.trolley.plants;
        })
        .catch(error => {
          this.sendError("Error", error.response.data.message);
        });
    }
  },
  mixins: [http, noti]
};
</script>