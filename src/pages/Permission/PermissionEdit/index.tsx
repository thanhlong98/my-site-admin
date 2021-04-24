import { useQuery } from '@apollo/client'
import React from 'react'
import { useHistory, useRouteMatch, withRouter } from 'react-router-dom'
import FormPermission from '../_components/FormPermission'
import { GET_PERMISSION_BY_ID } from '../queries'
import Loading from '@/components/Loading'

const PermissionEdit: React.FC = () => {
  const history = useHistory()
  const { params }: any = useRouteMatch()

  const { data, loading } = useQuery(GET_PERMISSION_BY_ID, {
    variables: {
      _id: params?.permissionId,
    },
  })

  const handleSuccess = () => {
    history.push('/permissions')
  }

  if (loading) {
    return <Loading />
  }

  return (
    <div>
      <h2>Edit Permission</h2>
      <FormPermission
        initialValues={data?.getPermissionById}
        handleSuccess={handleSuccess}
      />
    </div>
  )
}

export default PermissionEdit
