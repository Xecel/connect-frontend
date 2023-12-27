import axios from 'axios'

const SIGN_IN_API: string | undefined = import.meta.env.VITE_SIGN_IN_API

interface SignInData {
  userId: string
  userPassword: string
}

const signInApi = async (sendData: SignInData) => {
  if (SIGN_IN_API) {
    try {
      const response = await axios.post(SIGN_IN_API, sendData)
      return response.data
    } catch (error) {
      console.log(error)
      return false
    }
  } else {
    console.log('SIGN_IN_API is undefined')
  }
}

export default signInApi
