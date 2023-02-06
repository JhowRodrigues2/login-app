import axios from 'axios'

const api = axios.create({
    baseURL:process.env.REACT_APP
})

export const useApi = ()=>({
    validateToken: async(token:string)=>{
        const res = await api.post('/validade',{token})
        return res.data
    },
    signin : async(email:string, password:string)=>{
        const res = await api.post('/signin', {email, password})
        return res.data
    },
    logout: async()=>{
        const res = await api.post('/logout')
        return res.data
    }
})