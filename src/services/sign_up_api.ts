import axios from 'axios'

const SIGN_UP_API: string | undefined = import.meta.env.VITE_SIGN_UP_API

interface SignUpData {
  userId: string
  userPassword: string
}

export const signUpApi = async (sendData: SignUpData) => {
  if (SIGN_UP_API !== undefined) {
    try {
      const response = await axios.post(SIGN_UP_API, sendData)
      return response.data
    } catch (error) {
      console.log(error)
      return false
    }
  } else {
    console.log('SIGN_UP_API is undefined')
  }
}
