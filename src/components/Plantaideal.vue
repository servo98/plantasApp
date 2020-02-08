<template >
  <section class="hero">
 <div class="hero-body">
 <div :style="{'background-image': 'url(./images/IMG.JPG)'}">
                    <div class='media-right'>
           
            <div class='media-right'>
            <div class='media-right'>
            <div class='media-right'>
            <div class='media-right'>
            <div class='media-right'>
            <div class='media-right'>
            <div class='media-right'>
                <div class='media-right'>
       
             <br>
         <br>
          <br>
           <br>
           
                <div class='column is-4 has-text-centered'>
                    <p class='title'>
                    "discurso de planta ideal"
                    </p>

                </div>            
                                <div class="column is-4 has-text-centered">
                                    
                                        <div class="select is-rounded">
                                                <select>
                                                    <option>Luz adecuada</option>
                                                    <option>Sombra</option>
                                                    <option>Luz </option>
                                                    <option>Ambas</option>
                                                </select>
                                        </div>
                                    
                                </div>

                                    <div class="column is-4 has-text-centered"> 
                                            
                        

                                                <div class="select is-rounded">
                                                    <select>
                                                        <option>Riego</option>
                                                        <option>Cada semana</option>
                                                        <option>Cada dos dias </option>
                                                    </select>
                                                </div>
                                                
                            
                                            
                                        
                                    </div>

                                     <div class="column is-4 has-text-centered">
                                     <button class="button is-success is-rounded">obten tus plantas ideales</button>


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
       
   </section>    
</template>

<script>
import axios from 'axios'  
import http from '../mixins/axios'
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
            this.getAxios('plants')
                .then(res => {
                    this.plantas = res.data
                });
        },

       
        addPlant(id) {
            this.getAxios('/trolleys/trolleyByUser/' + localStorage.id) 
                .then(res => {
                    console.log(res)
                    this.putAxios('trolleys/'+ res.data + '/add' + id) 
                        .then(res => {
                            
                        
                        }).catch(error => {
                        console.log(error)
                        });
                })
        },  
    },
    mixins: [http]
};
</script>



<style>
  .hero { 
    background: url('') center/ cover;
    }
</style>