import axios from 'axios'

const GET_PROBLEM_API: string | undefined = import.meta.env.VITE_GET_PROBLEM_API

const getRandomSentence = async (level: string) => {
  const API_URL = `${GET_PROBLEM_API}/${level}`

  try {
    const response = await axios.get(API_URL)
    if (response.data === 'There is no sentence of the level.') {
      throw new Error('There is no sentence of the level.')
    }

    return response.data
  } catch (error) {
    console.error(error)
    throw new Error('GetRandomSentence Error.')
  }
}

export default getRandomSentence
