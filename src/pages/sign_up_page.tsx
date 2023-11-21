// SignIn.tsx

import React, {useState} from 'react'

import {TextField, Button, Container, Typography, Box} from '@mui/material'
import {StyledPaper, StyledForm} from '../styles/sign_up_style'

import {signUpApi} from '../services/sign_up_api'

const SignUpPage: React.FC = () => {
  const [userId, setUserId] = useState('')
  const [userPassword, setUserPassword] = useState('')

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

    setUserId('')
    setUserPassword('')

    const signUpSuccess = await signUpApi(sendData)

    if (signUpSuccess) {
      console.log('회원가입 성공!!!')
    } else {
      console.log('회원가입 실패!!!')
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
            label='ID'
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
            label='Password'
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
