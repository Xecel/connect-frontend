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

    try {
      const response = await axios.post(
        'http://localhost:8080/signUp',
        sendData
      )
      console.log('SignUp successful:', response.data)
    } catch (error) {
      console.log(error)
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

export default SignIn
