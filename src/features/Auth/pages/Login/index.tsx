import React from 'react'
import { useDispatch } from 'react-redux'
import { switchAuthen } from '../../authSlice'

const LoginPage: React.FC = () => {
  const dispatch = useDispatch()

  const handleSubmit = async () => {
    dispatch(switchAuthen({ state: true }))
  }

  return (
    <div>
      <button onClick={handleSubmit}>LoginPage</button>
    </div>
  )
}

export default LoginPage
