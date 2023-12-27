import {useNavigate} from 'react-router-dom'

import MainButtonContainer from '../components/main_button_container'

import {useSetRecoilState} from 'recoil'
import {answerState} from '../atom/answerAtom'

const MainPage = () => {
  const navigate = useNavigate()
  const setAnswerState = useSetRecoilState(answerState)

  const handleClickEasy = () => {
    // console.log('Easy 버튼이 클릭되었습니다.')
    setAnswerState('')
    navigate('/easy')
  }

  const handleClickNormal = () => {
    // console.log('Normal 버튼이 클릭되었습니다.')
    setAnswerState('')
    navigate('/normal')
  }

  const handleClickHard = () => {
    // console.log('Hard 버튼이 클릭되었습니다.')
    setAnswerState('')
    navigate('/hard')
  }

  return (
    <div>
      <MainButtonContainer
        onClickEasy={handleClickEasy}
        onClickNormal={handleClickNormal}
        onClickHard={handleClickHard}
      />
    </div>
  )
}

export default MainPage
