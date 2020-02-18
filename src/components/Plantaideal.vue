
<template >
  
 <div class="card has-text-centered ">
 <div class='card-content  has-text-centered'>
 <div class='columns is-overlay has-text-centered' style='top: 200px; left: 450px'>
                <div class="column is-half has-text-centered ">   <p class='title'>
                    "discurso de planta ideal"
                    </p>

                        
                              
                                   
                                        <div class="select is-rounded is-4">
                                                <select>2
                                                    <option>Luz adecuada</option>
                                                    <option>Sombra</option>
                                                    <option>Luz </option>
                                                    <option>Ambas</option>
                                                </select>
                                        </div>
                                   
                                

                                    
                                            
                        

                                                <div class="select is-rounded">
                                                    <select>
                                                        <option>Riego</option>
                                                        <option>Cada semana</option>
                                                        <option>Cada dos dias </option>
                                                    </select>
                                                </div><br>
                                                
                            
                                            
                                        
                                    <br>

                                     <button class="button is-success is-rounded">obten tus plantas ideales</button>


                                     

                               

       
         
         </div>
         </div>
        </div>
           </div>   
     
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



<style scoped>

</style>