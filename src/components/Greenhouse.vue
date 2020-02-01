<template>
    <div class="container">
        <div v-for="planta in plantas" :key="planta._id" class="columns">
            <div class="column is-4">imagen</div>
            <div class="column">
                <p>
                    {{planta.name}}
                </p>
                <p>
                    {{planta.specie}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
// import axios from 'axios'
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
            // console.log()
            // axios.get('http://localhost:3000/plants', {
            //     responseType: 'json'
            // })
            // .then((response) => {
            //     this.plantas = response.data
            // })
        }
    },
    mixins: [http]
};
</script>