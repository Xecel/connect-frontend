// PrivateRoute.jsx
import React from 'react'
import {Navigate} from 'react-router-dom'
import {useRecoilValue} from 'recoil'
import {isLoggedInState} from './atom/isLoggedInAtom'

interface PrivateRouteProps {
  component: React.ReactNode
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({component}) => {
  const isLoggedIn = useRecoilValue(isLoggedInState)

  return isLoggedIn ? component : <Navigate to='/exception' />
}

export default PrivateRoute
