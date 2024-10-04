import axios from 'axios'

//TODO: manejar el URL de la API con variables de entorno
const httpClient = axios.create({
  baseURL: 'https://staging.duxsoftware.com.ar/api',
  params: {
    sector: '7000'
  }
})

export default httpClient