import React from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

interface AnswerChatBoxProps {
  message: string
}

const AnswerChatBox: React.FC<AnswerChatBoxProps> = ({message}) => {
  const chatBoxStyle = {
    backgroundColor: '#41aaff', // Blue background color
    color: '#ffffff', // White text color
    padding: '10px',
    borderRadius: '8px',
    display: 'inline-block', // Adjust size based on content
    justifyContent: 'center', // Center content horizontally
  }

  return (
    <Paper style={chatBoxStyle}>
      <Typography style={{fontFamily: 'Noto Sans'}} variant='h6'>
        {message}
      </Typography>
    </Paper>
  )
}

export default AnswerChatBox
