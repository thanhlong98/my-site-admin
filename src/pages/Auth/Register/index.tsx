import React from 'react'
import { useDispatch } from 'react-redux'
import { switchAuthen } from '../authSlice'

const RegisterPage: React.FC = () => {
  const dispatch = useDispatch()

  const handleSubmit = async () => {
    dispatch(switchAuthen({ state: true }))
  }

  return (
    <div>
      <button onClick={handleSubmit}>RegisterPage</button>
    </div>
  )
}

export default RegisterPage
