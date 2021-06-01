import { environment } from '@/environment/environment'
import axios from 'axios'

axios.defaults.baseURL = environment.API_BASE_URL
axios.defaults.headers.common = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
}

export default {
  install: vue => {
    vue.prototype.$http = axios
  }
}
