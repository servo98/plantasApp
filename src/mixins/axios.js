import axios from 'axios'

const http = axios.create({
    baseURL: 'http://localhost:4000/',
    timeout: 1000,

    // headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     // "Access-Control-Expose-Headers": "Access-Control-*",
    //     "Access-Control-Allow-Headers": "Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, auth",
    //     "Access-Control-Allow-Methods": 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
    //     'Allow': 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
    //     "Access-Control-Allow-Credentials": true
    // }

    // headers: {'X-Custom-Header': 'foobar'}
});

export default {
    methods: {
        getAxios(endPoint) {
            return http.get(endPoint);
        },
        postAxios(endPoint, data){
            return http.post(endPoint, data);
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
