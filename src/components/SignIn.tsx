// SignIn.tsx

import React, {useState} from 'react'
import styled from '@emotion/styled'
import {
  TextField,
  Button,
  Container,
  Typography,
  Paper,
  Box,
} from '@mui/material'

import axios from 'axios'
import {Link} from 'react-router-dom'

// Styled components

const StyledPaper = styled(Paper)`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
`

const StyledForm = styled.form`
  width: 80%;
  margin-top: 1rem;
`

// SignIn component
const SignIn: React.FC = () => {
  const [userId, setUserId] = useState('')
  const [userPassword, setuserPassword] = useState('')

  const handleUserIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setuserPassword(e.target.value)
  }

  // API 사용 부분
  const handleSignInClick = async () => {
    // Simulate SignIn logic
    console.log(`ID: ${userId}, Password: ${userPassword}`)

    const sendData = {
      userId: userId,
      userPassword: userPassword,
    }

    setUserId('')
    setuserPassword('')

    try {
      const response = await axios.post(
        'http://localhost:8080/signIn',
        sendData
      )

      if (response.data) {
        console.log('로그인 성공!!!')
      } else {
        console.log('로그인 실패!!!')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() // Prevents the default form submission behavior
    handleSignInClick()
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
            <Button type='submit' fullWidth variant='contained' color='primary'>
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

export default SignIn
