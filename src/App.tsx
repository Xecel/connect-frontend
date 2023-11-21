import SignInPage from './pages/sign_in_page'
import SignUpPage from './pages/sign_up_page'

import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path='/'>
        <Route path='/' element={<SignInPage />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Route>
    </Routes>
  )
}

export default App
