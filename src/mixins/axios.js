import axios from 'axios'


axios.defaults.baseURL = process.env.VUE_APP_SERVICE_URL
// const http = axios.create({
//     baseURL: process.env.VUE_APP_SERVICE_URL,
//     timeout: 1000,
//     // headers: {
//     //     auth: localStorage.token,
//     //     // "Access-Control-Allow-Origin": "https://plantasapp.now.sh"
//     // }
// });
console.log(process.env, 'holaaa')
export default {
    methods: {
        getAxios(endPoint) {
            return axios.get(endPoint);
        },
        postAxios(endPoint, data){
            return axios.post(endPoint, data);
        },
        putAxios(endPoint, data){
            return axios.put(endPoint, {
                data
            });
        },
        deleteAxios(endPoint){
            return axios.delete(endPoint);
        },
        login(token){
            axios.defaults.headers.auth = token
        },
        logout(){
            axios.defaults.headers.auth = undefined
            this.$router.push('/')
        }

    }
}
