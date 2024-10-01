import axios from 'axios'

//TODO: manejar el URL de la API con variables de entorno
const httpClient = axios.create({
  baseURL: 'http://localhost:3000',
})

export default httpClient