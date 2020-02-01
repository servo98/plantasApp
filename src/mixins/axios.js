import axios from 'axios'

const http = axios.create({
    baseURL: process.env.VUE_APP_SERVICE_URL,
    timeout: 1000,
    headers: {
        auth: localStorage.token,
        "Access-Control-Allow-Origin": "*"
    }
});
console.log(process.env, 'holaaa')
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
        },
        login(token){
            http.defaults.headers.auth = token
        },
        logout(){
            http.defaults.headers.auth = undefined
            this.$router.push('/')
        }

    }
}
