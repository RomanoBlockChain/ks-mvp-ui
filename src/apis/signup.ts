import { instance } from '.'

export type Register = {
  username?: string
  password: string
  avatar?: string
  email: string
  facebook?: string
  gmail?: string
  typeUser: string
  status?: string
  token?: string
}

export const SignUpApi = {
  getOTP(email: string) {
    return instance.post(`/GetOtp?email=${email}`)
  },
  register(user: Register) {
    return instance.post(`/Register`, user)
  },
}
