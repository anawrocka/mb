import { create } from 'apisauce'

const api = create({
  baseURL: 'https://rest.messagebird.com',
  params: {
    access_key: 'iWRlo7jrNgkEWbZDDbN38xOQe'
  },
  headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json' 
    }
})

export default api
