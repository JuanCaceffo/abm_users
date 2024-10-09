import axios from 'axios'

const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_SERVER_URL,
  params: {
    sector: process.env.NEXT_APP_SECTOR_FILTER,
  },
})

export default httpClient
