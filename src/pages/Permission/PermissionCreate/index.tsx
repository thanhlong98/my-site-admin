import React from 'react'
import { useHistory } from 'react-router'
import FormPermission from '../_components/FormPermission'

const PermissionCreate: React.FC = () => {
  const history = useHistory()

  const handleSuccess = () => {
    history.push('/permissions')
  }

  return (
    <div>
      <h2>Create Permission</h2>
      <FormPermission initialValues={{}} handleSuccess={handleSuccess} />
    </div>
  )
}

export default PermissionCreate
