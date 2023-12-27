import React, {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'

import {TextField, Button, Container, Typography, Box} from '@mui/material'
import {StyledPaper, StyledForm} from '../styles/sign_in_style'

import signInApi from '../services/sign_in_api'

import {useSetRecoilState} from 'recoil'
import {isLoggedInState} from '../atom/isLoggedInAtom'

const SignInPage: React.FC = () => {
  const [userId, setUserId] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const setIsLogged = useSetRecoilState(isLoggedInState)

  const navi = useNavigate()

  const handleUserIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPassword(e.target.value)
  }

  const handleSignInClick = async () => {
    console.log(`ID: ${userId}, Password: ${userPassword}`)

    const sendData = {
      userId,
      userPassword,
    }

    setUserId('')
    setUserPassword('')

    try {
      const signInSuccess = await signInApi(sendData)

      if (signInSuccess) {
        console.log('로그인 성공!!!')
        setIsLogged(true)
        navi('/main')
      } else {
        console.log('로그인 실패!!!')
        setIsLogged(false)
      }
    } catch (error) {
      console.error('로그인 중 오류 발생:', error)
      setIsLogged(false) // Update the state to false in case of an error
    }
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <Container component='main' maxWidth='xs'>
      <StyledPaper elevation={5}>
        <Typography variant='h5'>로그인</Typography>
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
          <Box sx={{mt: 2}}>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              onClick={handleSignInClick}
            >
              로그인
            </Button>
            <Button
              fullWidth
              variant='outlined'
              color='primary'
              sx={{mt: 1}}
              component={Link}
              to='/signup'
            >
              회원가입
            </Button>
          </Box>
        </StyledForm>
      </StyledPaper>
    </Container>
  )
}

export default SignInPage
