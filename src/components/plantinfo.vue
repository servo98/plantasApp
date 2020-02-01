<template>

   

<div class="container">
    
        
    
        <div class="columns  is-multiline ">
           
                <br>
                      <figure class="image is-4by3">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                      </figure>
                     <p class="is-size-3">{{planta.name}}</p>
                    <p class="is-size-5">{{planta.specie}}</p> 
                    <p class="is-size-5">{{planta.size}}</p>   
                    <p class="is-size-5">{{planta.price}}</p> 
                    <br>   
                    <a class="button is-success is-7  " >Agregar al carrito</a>
                      <br>  
                        <br> 
                    <a class="button is-success is-7  ">comprar ahora</a> 
                        <br>    
                          <br> 
                    <a class="button is-success is-7 "> +info</a>
                        <br> 
                        <br> 

                
            </div>
       
    </div>
    
</figure>
    
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
            axios.get('http://localhost:3080/plants', {
                responseType: 'json'
            })
            .then((response) => {
                this.plantas = response.data
            })
        },
        crearCarritoUsuario(){
           // axios.get('',{
            //responsive tipe online
            })
           // .then((response) => {
                //this.user == online
            })
        },
        crearCarritoInvitado(){
        },
        agregarPlantaCarrito(){
        
        },
        quitarPlantaCarrito(){
        },
        mostrarSoloAccesorios(){
        },
        comprarAhoraUsuario(){
        },
        comprarAhoraOnline(){
        },

    }

};
</script>