import axios, {AxiosResponse} from 'axios'

const USE_GPT_API: string | undefined = import.meta.env.VITE_USE_GPT_API

const getGPTResponse = async (requestSentence: string) => {
  if (!USE_GPT_API) {
    throw new Error('USE_GPT_API is not defined...')
  }

  const requestData = {
    korSentence: requestSentence,
  }

  try {
    const response = await axios.post(USE_GPT_API, requestData)
    return response.data
  } catch (error) {
    console.error(error)
    throw new Error('Error making API request')
  }
}

export default getGPTResponse
