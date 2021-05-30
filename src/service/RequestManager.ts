import axios from 'axios'

const BASE_URL = process.env.BASE_URL

console.log(BASE_URL)

export default new class RequestManager {
  getTask = url => {
    return new Promise((resolve, reject) => {
      axios.get(`${BASE_URL}${url}/`).then(response => {
        resolve(response.data)
      }).catch(error => {
        reject(error)
      })
    })
  };

}()
