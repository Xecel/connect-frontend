// SignIn.tsx

import React, {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'

import {TextField, Button, Container, Typography, Box} from '@mui/material'
import {StyledPaper, StyledForm} from '../styles/sign_up_style'

import checkDupIdApi from '../services/check_id_dup'
import signUpApi from '../services/sign_up_api'

const SignUpPage: React.FC = () => {
  const [userId, setUserId] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const navi = useNavigate()

  const showWarningPopup = (message: string) => {
    alert(message)
  }

  const handleUserIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPassword(e.target.value)
  }

  const handleSignUpClick = async () => {
    // Simulate SignIn logic
    console.log(`ID: ${userId}, Password: ${userPassword}`)

    const sendData = {
      userId: userId,
      userPassword: userPassword,
    }

    const checkData = {
      userId: userId,
    }

    setUserId('')
    setUserPassword('')

    // if (true) duplicated..
    const checkIdDup = await checkDupIdApi(checkData)

    if (checkIdDup) {
      showWarningPopup('이미 생성된 ID입니다, 다른 ID를 사용해주세요.')
      return
    }

    const signUpSuccess = await signUpApi(sendData)

    if (signUpSuccess) {
      showWarningPopup('회원가입 성공')
      navi('/signin')
      return
    }
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() // Prevents the default form submission behavior
    handleSignUpClick()
  }

  return (
    <Container component='main' maxWidth='xs'>
      <StyledPaper elevation={5}>
        <Typography variant='h5'>회원가입</Typography>
        <StyledForm onSubmit={handleFormSubmit}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='userId'
            label='ID - 영문, 숫자 4~20자'
            name='userId'
            autoComplete='off'
            autoFocus
            value={userId}
            onChange={handleUserIdChange}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password - 영문, 숫자 6자이상'
            type='password'
            id='password'
            autoComplete='current-password'
            value={userPassword}
            onChange={handlePasswordChange}
          />
          <Box sx={{mt: 1}}>
            <Button
              fullWidth
              type='submit'
              variant='contained'
              color='primary'
              onClick={handleSignUpClick}
              sx={{mt: 1}}
            >
              제출
            </Button>
          </Box>
        </StyledForm>
      </StyledPaper>
    </Container>
  )
}

export default SignUpPage
