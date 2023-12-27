// src/components/ButtonContainer.js
import Button from '@mui/material/Button'
import {styled} from '@mui/system'

const Container = styled('div')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: '30%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
})

interface CustomButtonProps {
  n_hei: string
  n_bgcolor: string
}

interface ButtonContainerProps {
  onClickEasy: () => void
  onClickNormal: () => void
  onClickHard: () => void
}

const CustomButton = styled(Button)<CustomButtonProps>(
  ({n_hei, n_bgcolor}) => ({
    border: 'none',
    display: 'block',
    textAlign: 'center',
    cursor: 'pointer',
    textTransform: 'uppercase',
    outline: 'none',
    overflow: 'hidden',
    position: 'relative',
    color: '#fff',
    fontWeight: 700,
    fontSize: '15px',
    backgroundColor: '#fff',
    padding: '17px 60px',
    margin: '0 auto',
    borderRadius: '5px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.20)',
    '& span': {
      position: 'relative',
      zIndex: 1,
    },
    '&:after': {
      content: "''",
      position: 'absolute',
      left: 0,
      top: 0,
      height: n_hei,
      width: '140%',
      background: n_bgcolor,
      transition: 'all .5s ease-in-out',
      transform: 'translateX(-98%) translateY(-25%) rotate(45deg)',
    },
    '&:hover:after': {
      transform: 'translateX(-6%) translateY(-25%) rotate(45deg)',
    },
  })
)

export const MainButtonContainer: React.FC<ButtonContainerProps> = ({
  onClickEasy,
  onClickNormal,
  onClickHard,
}) => {
  return (
    <Container>
      <CustomButton n_hei='590%' n_bgcolor='#00D4FF' onClick={onClickEasy}>
        <span>쉬움</span>
      </CustomButton>

      <CustomButton n_hei='590%' n_bgcolor='#FFA500' onClick={onClickNormal}>
        <span>보통</span>
      </CustomButton>

      <CustomButton n_hei='670%' n_bgcolor='#FF0000' onClick={onClickHard}>
        <span>어려움</span>
      </CustomButton>
    </Container>
  )
}

export default MainButtonContainer
