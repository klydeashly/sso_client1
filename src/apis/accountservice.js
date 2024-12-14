import axios from "axios"
import instance from "./instance"

const accountservice = {
    login: async(data) => {
        return await instance.post('User', data)
    }
}

export default accountservice;