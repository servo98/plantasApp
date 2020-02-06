<template> 
    
        
        <div class="columns  ">
  <div class="column ">
                      
                            
                            <div class='column '>
                            <button type="submit column" class="button is-primary"> Ver todas las plantas / Green house</button>
                            </div>
                            

                           
                            <div class='column '>                                
                                <article class="media">
                                <figure class="media-left">
                                <br>
                                
                                    <p class="image is-256x256">
                                    <img src="https://bulma.io/images/placeholders/128x128.png">
                                    </p>
                                
                                <br>
                                    <p class="image is-256x256">
                                    <img src="https://bulma.io/images/placeholders/128x128.png">
                                    </p>
                                    <br>
                                    <p class="image is-256x256">
                                    <img src="https://bulma.io/images/placeholders/128x128.png">
                                    </p>
                                
                                </figure>
                                <br>
                                <div class="media-content">
                                <br>
                                <br/>
                                
                               
                                    
                                    <div class='column'>

                                                           <div class='media'>
                                                           
                                                           
                                                           
                                                           
                                                                        <div class="media">
                                                                                    <div class="media-left">
                                                                                        <figure class=" image is-256x256">
                                                                                    <img src="https://bulma.io/images/placeholders/256x256.png">
                                                                                        </figure>
                                                                                    </div>
                                                                                    
                                                                                    <div v-for="planta in plantas" :key="planta._id" >
                                                                                            <div class="media-right">
                                                                                            <div class="media-right">
                                                                                             <br/>
                                                                                                <p class="is-size-3">{{planta.name}}</p>
                                                                                                <br>
                                                                                                <p class='is-size-5'>Agua: {{planta.water}}</p>
                                                                                                <p class='is-size-5'>Luz: {{planta.lightQuantity}}.</p>
                                                                                                <br>
                                                                                               <p class="is-size-5"> Precio: ${{planta.price}}</p> 
                                                                                                 
                                                                                            </div>
                                                                                           
                                                                                            </div>
                                                                                    </div>

                                                                                    <div class="media-right">
                                                                                    <div class="media-right">
                                                                                    <div class="media-right">
                                                                                    <div class="media-right">
                                                                                    <div class="media-right">
                                                                                    <div class="media-right">
                                                                                    <div class="media-right">
                                                                                    <div class="media-right">
                                                                                    <div class="media-right">
                                                                                     <div class="media-right">
                                                                                      <div class="media-right">
                                                                                       <div class="media-right">
                                                                                        <div class="media-right">
                                                                                         <div class="media-right">
                                                                                          <div class="media-right">
                                                                                          <div class="media-right">
                                                                                          <div class="media-right">
                                                                                          <div class="media-right">
                                                                                          <div class="media-right">
                                                                                          <div class='column'>
                                                                                          
                                                                                          <br>
                                                                                          <p class='is-size-4'> Envio gratis 😃🌿</p>
                                                                                          <br/>
                                                                                          <a class="button is-success is-7  ">Comprar ahora</a>
                                                                                   
                                                                                    </div>
                                                                                    <div class='column'>
                                                                                     <a class="button is-success is-7" v-on:click="addPlant(planta._id)">Agregar al carrito</a>
                                                                                    
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
                                
                                </article>

                                 </div>   
                                                            
                         
                            
            <footer class='has-background-grey-lighter'>
                            <div class="level">
                                <!-- Left side -->
                                    <div class="level-item has-text-centered">
                                      <div>
                                    
                                       <h2>Contact</h2>
                                            
                                            <p>correo@correo.com </p><br>
                                            <a class="footer__btn" href="correo@correo.com">Email Us</a>
                                            
                                    
                                    </div>
                                    </div> 
                                 

                            
                             
                            </div>
                                                                        
             </footer>
    </div>  
      </div>  
                             
                             
        
</template>
<script>
import axios from 'axios'  
import http from "../mixins/axios";

export default {
    mounted() {
         this.pedirPlanta()
    },
    data: function() {
        return {
            plantas: []
        }
    },
    
    methods: {
        pedirPlanta() {
      this.getAxios("plants/" + this.$route.params.plantId).then(res => {
        this.plantas = res.data;
      });
    },

       
        addPlant(id) {
            this.getAxios('/trolleys/trolleyByUser/' + localStorage.id) 
                .then(res => {
                    console.log(res)
                    this.putAxios('trolleys/'+ trolley.id + '/add' + id) 
                        .then(res => {
                            trolley.push(id)
                        
                        }).catch(error => {
                        console.log(error)
                        });
                })
        },  
    },
    mixins: [http]
};
</script>
