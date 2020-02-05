<template>
<div class="control">
        <div class="columns ">
        <input class="input column is-half " type="text" placeholder="Que planta buscas" >
        
        <button type="submit column" class="button is-primary ">Buscar</button>
        
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



