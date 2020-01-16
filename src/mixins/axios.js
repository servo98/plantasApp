import axios from 'axios'

const http = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  });

export default {
    methods: {
        getAxios(endPoint) {
            http.get(endPoint)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
}
