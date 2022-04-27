
import http from './http.js'

const searchApi = function(url,ps) {
    return http.post(url, ps)
}
const cameraApi = function(url,ps) {
    return http.post(url, ps)
}
export  {
    searchApi,
    cameraApi

}