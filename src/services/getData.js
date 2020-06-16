import axios from 'axios'
import { url } from './url'
export const getData = () => {
    return axios.get(url + 'getData')
}