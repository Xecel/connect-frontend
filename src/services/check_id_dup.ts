import axios from 'axios'

const CHECK_DUP_ID_API: string | undefined = import.meta.env.VITE_CHECK_DUP_ID

interface CheckDupIdData {
  userId: string
}

const checkDupIdApi = async (userId: CheckDupIdData) => {
  if (CHECK_DUP_ID_API !== undefined) {
    try {
      const response = await axios.get(CHECK_DUP_ID_API, {params: userId})
      return response.data
    } catch (error) {
      console.error(error)
      return error
    }
  } else {
    console.log('CHECK_DUP_ID_API is undefined')
  }
}

export default checkDupIdApi
