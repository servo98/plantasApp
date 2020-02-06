<template>
    <div class="container">
        <table class="table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Cantidad</th>
                    <th>Tipo</th>
                    <th>Precio</th>
                    <th>Quitar del carrito</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="cartItem in cartItems" :key="cartItem._id">
                    <td>{{cartItem.name}}</td>
                    <td>{{cartItem.specie}}</td>
                    <td><span></span></td>
                    <td>$<span></span></td>
                    <td class="has-text-centered">
                        <button class="button is-danger" v-on:click="borrar(cartItem._id)"><i class="fas fa-trash"></i></button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import http from "../mixins/axios";
export default {
    mounted() {
        this.pedirCarrito()
    },
    data: function() {
        return {
            cartItems: []
        }
    },
    methods: {
        borrar(id){
            this.cartItems.forEach((plant, index) => {
                if(plant._id == id){
                    this.cartItems.splice(index, 1);
                }
            });
            //TODO: Delete plant from cart
        },
        pedirCarrito(){
            http.getAxios('')
            .then((response) => {
                this.cartItems = response.data
            })
        }
    },
    mixins: [http]
};
</script>