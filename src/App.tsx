import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path='/'>
        <Route path='/' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Route>
    </Routes>
  )
}

export default App
