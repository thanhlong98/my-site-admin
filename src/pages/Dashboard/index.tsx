import React from 'react'
import { Link } from 'react-router-dom'

const DashBoard: React.FC = () => {
  return (
    <div>
      <p>Hello from dashboard</p>
      <Link to='/interview'>Interview</Link>
    </div>
  )
}

export default DashBoard
