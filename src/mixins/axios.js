import axios from 'axios'

const http = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  });

export default {
    methods: {
        getAxios(endPoint) {
            let d = new Date();                
      d.setTime(d.getTime() + (1*24*60*60*1000));
      let expires = "expires="+ d.toUTCString();
      document.cookie = 'toto=eose;'+ expires + ";path=/";
            console.log(localStorage)
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
