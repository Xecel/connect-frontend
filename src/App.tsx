import SignInPage from './pages/sign_in_page.js'
import SignUpPage from './pages/sign_up_page.js'

import MainPage from './pages/main_page.tsx'
import EasyPage from './pages/easy_page.tsx'
import NormalPage from './pages/normal_page.tsx'
import HardPage from './pages/hard_page.tsx'

import FacilityPage from './pages/facility_page.jsx'
import ExceptionPage from './pages/exception_page.tsx'

import {Routes, Route} from 'react-router-dom'

import PrivateRoute from './PrivateRoute.jsx'

const App = () => {
  return (
    <Routes>
      <Route path='/'>
        <Route path='/' element={<SignInPage />} />
        <Route path='/signin' element={<SignInPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route
          path='/main'
          element={<PrivateRoute component={<MainPage />} />}
        />
        <Route
          path='/easy'
          element={<PrivateRoute component={<EasyPage />} />}
        />
        <Route
          path='/normal'
          element={<PrivateRoute component={<NormalPage />} />}
        />
        <Route
          path='/hard'
          element={<PrivateRoute component={<HardPage />} />}
        />

        <Route path='/facility' element={<FacilityPage />} />
        <Route path='/exception' element={<ExceptionPage />} />
      </Route>
    </Routes>
  )
}

export default App
