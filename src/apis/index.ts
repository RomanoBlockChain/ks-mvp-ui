import { clientEnv } from '@/env';
import axios from 'axios';

export const instance = axios.create({
  baseURL: "https://api.kickstar.io/",//clientEnv.NEXT_PUBLIC_APP_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

instance.interceptors.request.use(
  (request) => {
    return request
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    return response
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

export default function setAuthToken(token: string) {
  if (token) {
    instance.defaults.headers.Authorization = `Bearer ${token}`
  }
}
