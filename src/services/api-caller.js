import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_NALS_API_ENDPOINT
axios.defaults.headers.common['Accept'] = 'application/json'

export default function apiCaller({ method = 'GET', url, params = null, data = null }) {
  return axios({
    method,
    url,
    params,
    data,
    headers: null
  })
}