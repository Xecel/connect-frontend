import React from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

interface ProbChatBoxProps {
  message: string
}

const ProbChatBox: React.FC<ProbChatBoxProps> = ({message}) => {
  const chatBoxStyle = {
    backgroundColor: '#41aaff', // Blue background color
    color: '#ffffff', // White text color
    padding: '10px',
    borderRadius: '8px',
    margin: '10px',
    display: 'inline-block', // Adjust size based on content
  }

  return (
    <Paper style={chatBoxStyle}>
      <Typography variant='body1'>{message}</Typography>
    </Paper>
  )
}

export default ProbChatBox
