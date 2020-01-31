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
                <tr v-for="planta in plantas" :key="planta._id">
                    <td>{{planta.name}}</td>
                    <td>{{planta.specie}}</td>
                    <td><span></span></td>
                    <td>$<span></span></td>
                    <td class="has-text-centered">
                        <button class="button is-danger" v-on:click="borrar(planta._id)"><i class="fas fa-trash"></i></button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    mounted() {
        this.pedirPlantas()
    },
    data: function() {
        return {
            plantas: []
        }
    },
    methods: {
        pedirPlantas(){
            axios.get('http://localhost:3000/plants', {
                responseType: 'json'
            })
            .then((response) => {
                this.plantas = response.data
            })
        },
        borrar(id){
            this.plantas.forEach((plant, index) => {
                if(plant._id == id){
                    this.plantas.splice(index, 1);
                }
            });
            //TODO: Delete plant from cart
        }
    }
};
</script>