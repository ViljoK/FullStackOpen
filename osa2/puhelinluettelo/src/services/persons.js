import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}
const create = newPerson => {
    const request = axios.post(baseUrl, newPerson)
    return request.then(response => response.data)
}
const update = () => {
    
}
const drop = id => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => {
        if (response.status === 200) {
            return "Poisto onnistui"
        }
        else {
            return "Poisto epäonnistui"
        }
    })
}

export default {getAll, create, update, drop}