import axios from 'axios'

const GET_GPT_FEEDBACK_API: string | undefined = import.meta.env
  .VITE_GET_GPT_FEEDBACK_API

const getGPTFeedback = async (requestSentence: string) => {
  if (!GET_GPT_FEEDBACK_API) {
    throw new Error('GET_GPT_FEEDBACK_API is not defined...')
  }

  const requestData = {
    korSentence: requestSentence,
  }

  try {
    const response = await axios.post(GET_GPT_FEEDBACK_API, requestData)
    return response.data
  } catch (error) {
    console.error('API request error:', error)
    throw new Error('Error making API request')
  }
}

export default getGPTFeedback
