import {styled} from '@mui/system'
import Button from '@mui/material/Button'

import {Container} from '@mui/material'

interface CustomButtonProps {
  n_hei: string
  n_bgcolor: string
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
    // padding: '17px 60px',
    margin: '0 auto',
    borderRadius: '5px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.15)',
    width: '93px', // 가로 크기 조절 가능
    height: '40px', // 세로 크기 조절 가능
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

const InnerContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '5px',
})

interface ButtonContainerProps {
  onClickSummit: () => void
  onClickGPT: () => void
  onClickNext: () => void
  newBackgroundColor: string
  newHeight: string
}

const ButtonContainer: React.FC<ButtonContainerProps> = ({
  onClickSummit,
  onClickGPT,
  onClickNext,
  newBackgroundColor,
  newHeight,
}) => {
  return (
    <div>
      <InnerContainer>
        <CustomButton
          n_hei={newHeight}
          n_bgcolor={newBackgroundColor}
          onClick={onClickSummit}
        >
          <span>정답</span>
        </CustomButton>

        <br />

        <CustomButton
          n_hei={newHeight}
          n_bgcolor={newBackgroundColor}
          onClick={onClickGPT}
        >
          <span>GPT</span>
        </CustomButton>
        <br />

        <CustomButton
          n_hei={newHeight}
          n_bgcolor={newBackgroundColor}
          onClick={onClickNext}
        >
          <span>NEXT</span>
        </CustomButton>
      </InnerContainer>
    </div>
  )
}

export default ButtonContainer
