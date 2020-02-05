<template> 
    <div class="container">

        <div class="control">
            <div class="columns is-half is-vcentered">
                <button type="submit column" class="button is-primary"> Ver todas las plantas</button>
            </div>
        </div>
        <br>
             <div class="columns is-multiline is-vcentered">
                <div class="column">
                    <figure class=" image is-128x128">
                    <img src="https://bulma.io/images/placeholders/128x128.png">
                    </figure>
                    <br>
                
                    <figure class="image is-128x128">
                    <img src="https://bulma.io/images/placeholders/128x128.png">
                    </figure>
                    <br>
                    <figure class="image is-128x128">
                    <img src="https://bulma.io/images/placeholders/128x128.png">
                    </figure>
                </div>
            </div>
             <div class="columns is-multiline is-vcentered">
                <div class="column is-6">    
                <div class="card">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                 <figure class=" image is-128x128">
                                  <img src="https://bulma.io/images/placeholders/128x128.png">
                                </figure>
                                </div>
                                <div v-for="planta in plantas" :key="planta._id" >
                                <div class="media-content">
                                            <p class="is-size-3">{{planta.name}}</p>
                                            <p class="is-size-5">${{planta.price}}</p>    
                                        </div>
                                </div>
                        </div>
                    </div>
                </div>
             </div>
             </div>
                
         

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
           axios.get('http://localhost:3080/plants', {
                responseType: 'json'
            })
            .then((response) => {
                this.plantas = response.data
            })
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
    
};
</script>
