import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {BrowserRouter} from 'react-router-dom'
import {RecoilRoot} from 'recoil'

import {CssBaseline} from '@mui/material'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RecoilRoot>
    <BrowserRouter>
      <CssBaseline />
      <App />
    </BrowserRouter>
  </RecoilRoot>
)
