import {atom} from 'recoil'

export const levelState = atom({
  key: 'levelState',
  default: 'hard',
})