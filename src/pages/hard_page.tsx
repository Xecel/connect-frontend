import {styled} from '@mui/system'

// ui
import ButtonContainer from '../components/button_container'
import {Container, TextField, CircularProgress} from '@mui/material'
import ProbChatBox from '../components/prob_chatbox'
import AnswerChatBox from '../components/answer_chatbox'
import GPTChatBox from '../components/gpt_chatbox'

// api
import getRandomSentence from '../services/get_random_sentence_api'

// recoil
import {useRecoilState} from 'recoil'
import {hardProblemState} from '../atom/hardProblemAtom'
import {levelState} from '../atom/levelAtom'
import {useEffect, useState} from 'react'
import getGPTResponse from '../services/get_gpt_response'
import {answerState} from '../atom/answerAtom'
import getGPTFeedback from '../services/get_gpt_feedback'

const SyledContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '10px',
  marginTop: '1000px',
  maxWidth: '50%',
  margin: 'auto',
  gap: '35px',
})

const StyledTextField = styled(TextField)({
  width: '300px',
  height: '100px',
})

const HardPage = () => {
  const newBackgroundColor = '#FF0000'
  const newHeight = '690%'

  const [problem, setProblem] = useRecoilState(hardProblemState)
  const [level, setLevel] = useRecoilState(levelState)
  const [answer, setAnswer] = useRecoilState(answerState)

  const [isFeedbackLoading, setIsFeedbackLoading] = useState(false)
  const [gptFeedback, setGptFeedback] = useState(null)
  const [isGptLoading, setIsGptLoading] = useState(false)
  const [gptResponse, setGptResponse] = useState(null)

  useEffect(() => {
    // answer가 변경될 때마다 포커스를 설정
    const inputField = document.getElementById('answerTextField')
    if (inputField) {
      inputField.focus()
    }
  }, [answer])

  useEffect(() => {
    // 비동기 문제 해결 해야한다.
    setLevel('hard')

    const fetchSentence = async (lev: string) => {
      try {
        const newSentence = await getRandomSentence(lev)

        if (newSentence !== null) {
          setProblem(newSentence)
        }
      } catch (error) {
        console.error('Error fetching random sentence:', error)
      }
    }

    fetchSentence('hard') // fetchData 함수 호출

    // cleanup 함수 (컴포넌트가 언마운트되거나 업데이트되기 전에 실행됨)
    return () => {
      // 필요한 경우 정리 작업 수행
    }
  }, [])

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAnswer = event.target.value
    setAnswer(newAnswer)
  }

  const onClickSubmit = async () => {
    setIsFeedbackLoading(true) // 피드백: 생성 중임을 나타내는 상태를 true로 설정

    try {
      const response = await getGPTFeedback(problem)

      setGptFeedback(response)
    } catch (error) {
      console.error('Error fetching GPT response:', error)
    } finally {
      setIsFeedbackLoading(false) // 피드백: 생성 중임을 나타내는 상태를 false로 설정
    }
  }

  const onClickGPT = async () => {
    setIsGptLoading(true) // 피드백: 생성 중임을 나타내는 상태를 true로 설정

    try {
      const response = await getGPTResponse(answer)

      setGptResponse(response)
    } catch (error) {
      console.error('Error fetching GPT response:', error)
    } finally {
      setIsGptLoading(false) // 피드백: 생성 중임을 나타내는 상태를 false로 설정
    }
  }

  const onClickNext = async () => {
    try {
      const newSentence = await getRandomSentence(level)
      setGptFeedback(null)
      setGptResponse(null)
      setAnswer('')
      if (newSentence) {
        setProblem(newSentence)
      }
    } catch (error) {
      console.error('Error fetching random sentence:', error)
    }
  }

  return (
    <div>
      <SyledContainer>
        <ProbChatBox message={problem} />
        <StyledTextField
          label='Answer'
          variant='outlined'
          multiline
          rows={4}
          fullWidth
          value={answer}
          onChange={handleAnswerChange}
        />
        <ButtonContainer
          onClickSummit={onClickSubmit}
          onClickGPT={onClickGPT}
          onClickNext={onClickNext}
          newBackgroundColor={newBackgroundColor}
          newHeight={newHeight}
        />
        {isFeedbackLoading && <CircularProgress size={100} />}
        {gptFeedback && <AnswerChatBox message={gptFeedback} />}

        {isGptLoading && <CircularProgress size={100} />}
        {gptResponse && <GPTChatBox message={gptResponse} />}
      </SyledContainer>
    </div>
  )
}

export default HardPage
