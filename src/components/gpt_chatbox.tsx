import React from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

interface GPTChatBoxProps {
  message: string
}

const GPTChatBox: React.FC<GPTChatBoxProps> = ({message}) => {
  const chatBoxStyle = {
    backgroundColor: '#000', // Blue background color
    color: '#FFBA00', // White text color
    padding: '10px',
    borderRadius: '8px',
    display: 'inline-block', // Adjust size based on content
    fontSize: '15px', // Font size
  }

  return (
    <Paper style={chatBoxStyle}>
      <Typography variant='body1'>{message}</Typography>
    </Paper>
  )
}

export default GPTChatBox
