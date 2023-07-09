import { instance } from '.'

export const SignInApi = {
  signIn(user: { email: string; password: string }) {
    return instance.post(
      `/Login?email=${user?.email}&password=${user?.password}`,
      user
    )
  },
}
