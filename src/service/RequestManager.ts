import axios from 'axios'
import { environment } from '../environment/environment'

axios.defaults.baseURL = environment.API_BASE_URL

export default new class RequestManager {
  requestHeaders = {
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/json'
    }
  };

  get (base: string) {
    return new Promise((resolve, reject) => {
      axios.get(base, this.requestHeaders).then((response: any) => {
        resolve(response.data)
      }).catch((error: any) => {
        reject(error)
      })
    })
  }

  details (base: string, id: number) {
    return new Promise((resolve, reject) => {
      axios.get(`${base}${id}`, this.requestHeaders).then((response: any) => {
        resolve(response.data)
      }).catch((error: any) => {
        reject(error)
      })
    })
  }

  post (base: string, args: any) {
    return new Promise((resolve, reject) => {
      axios.post(`${base}`, args, this.requestHeaders).then((response: any) => {
        resolve(response.data)
      }).catch((error: any) => {
        reject(error)
      })
    })
  }

  put (base: string, args: any) {
    return new Promise((resolve, reject) => {
      axios.put(`${base}${args.id}`, args, this.requestHeaders).then((response: any) => {
        resolve(response.data)
      }).catch((error: any) => {
        reject(error)
      })
    })
  }

  delete (base: string, id: number) {
    return new Promise((resolve, reject) => {
      axios.delete(`${base}${id}`, this.requestHeaders).then((response: any) => {
        resolve(response.data)
      }).catch((error: any) => {
        reject(error)
      })
    })
  }
}()
