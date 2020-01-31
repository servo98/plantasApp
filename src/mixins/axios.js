import axios from 'axios'

const http = axios.create({
    baseURL: 'http://localhost:4000/',
    timeout: 1000,
    headers: []
    // headers: {'X-Custom-Header': 'foobar'}
});

export default {
    methods: {
        getAxios(endPoint) {
            return http.get(endPoint);
        },
        postAxios(endPoint, data){
            return http.post(endPoint, {
                data
            });
        },
        putAxios(endPoint, data){
            return http.put(endPoint, {
                data
            });
        },
        deleteAxios(endPoint){
            return http.delete(endPoint);
        }
    }
}
