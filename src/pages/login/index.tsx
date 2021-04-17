import { switchAuthen } from '@/store'
import React from 'react'
import { useDispatch } from 'react-redux'

const Login: React.FC = () => {
  const dispatch = useDispatch()

  const handleSubmit = async () => {
    dispatch(switchAuthen({ state: true }))
  }

  return (
    <div>
      <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login
