import { IPermission } from '@/interfaces'
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons'
import { useMutation, useQuery } from '@apollo/client'
import {
  Button,
  message,
  Modal,
  Space,
  Table,
  TablePaginationConfig,
  Tooltip,
} from 'antd'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { DELETE_PERMISSIONS } from '../mutations'
import { GET_ALL_PERMISSION } from '../queries'
import './styles.less'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Slug',
    dataIndex: 'slug',
  },
  {
    title: 'Description',
    dataIndex: 'description',
  },
]

function showTotal(total: number) {
  return `Total ${total} items`
}

const PermissionList = (props: any) => {
  const [dataModalDelete, setDataModalDelete] = useState({
    loading: false,
    isShow: false,
  })
  const [data, setData] = useState<IPermission[]>([])
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const [pagination, setPagination] = useState<TablePaginationConfig>({
    current: 1,
    pageSize: 10,
    total: 10,
    showTotal: showTotal,
  })

  const history = useHistory()

  const { data: dataPermissions, error, loading, refetch } = useQuery(
    GET_ALL_PERMISSION,
    {
      variables: {
        limit: pagination.pageSize,
        offset: pagination.current,
      },
      onCompleted: (data) => {
        console.log('data: ', data)
      },
    }
  )
  const [deletePermissions] = useMutation(DELETE_PERMISSIONS)

  const onSelectChange = (selectedRowKeys: any) => {
    setSelectedRowKeys(selectedRowKeys)
  }

  const handleDelete = async () => {
    try {
      setDataModalDelete({
        ...dataModalDelete,
        loading: true,
      })

      const { data } = await deletePermissions({
        variables: {
          ids: selectedRowKeys,
        },
      })

      if (data?.deletePermissions) {
        refetch({
          limit: pagination.pageSize,
          offset: pagination.current,
        })
      }

      message.success('Success')
    } catch (error) {
      console.log(error?.message)

      refetch({
        limit: pagination.pageSize,
        offset: pagination.current,
      })

      message.error(error?.message)
    } finally {
      setDataModalDelete({
        isShow: false,
        loading: false,
      })
    }
  }

  const handleTableChange = (paginationT, filters, sorter) => {
    refetch({
      limit: paginationT.pageSize,
      offset: paginationT.current,
    })

    setPagination({ ...pagination, ...paginationT })
  }

  useEffect(() => {
    if (dataPermissions) {
      console.log('vo day')
      setData(dataPermissions?.permissions?.data || [])

      setPagination({
        ...pagination,
        total: dataPermissions?.permissions?.total,
      })
    }
  }, [dataPermissions])

  if (error) {
    console.log('error: ', error)
  }

  return (
    <>
      <div className="persmission-container">
        <div className="persmission-header">
          <h2>Permissions</h2>
          <Space>
            <Tooltip title="Add">
              <Button
                icon={<PlusOutlined />}
                onClick={() =>
                  history.push(`${history.location.pathname}/create`)
                }
              />
            </Tooltip>
            <Tooltip title="Edit">
              <Button
                disabled={selectedRowKeys.length !== 1}
                icon={<EditOutlined />}
                onClick={() =>
                  history.push(
                    `${history.location.pathname}/${selectedRowKeys[0]}`
                  )
                }
              />
            </Tooltip>
            <Tooltip title="Delete">
              <Button
                danger
                onClick={() =>
                  setDataModalDelete({ isShow: true, loading: false })
                }
                disabled={!selectedRowKeys.length}
                icon={<DeleteOutlined />}
              />
            </Tooltip>
          </Space>
        </div>
        <Table
          loading={loading}
          rowSelection={{
            selectedRowKeys,
            onChange: onSelectChange,
          }}
          columns={columns}
          pagination={pagination}
          dataSource={data.map((item: any) => ({
            ...item,
            key: item?._id,
          }))}
          onChange={handleTableChange}
        />
      </div>
      <Modal
        title="Confirm"
        visible={dataModalDelete.isShow}
        onOk={handleDelete}
        confirmLoading={dataModalDelete.loading}
        onCancel={() => setDataModalDelete({ isShow: false, loading: false })}
      >
        <span>
          Do you really want to remove these {selectedRowKeys.length}{' '}
          permissions ?
        </span>
      </Modal>
    </>
  )
}

export default PermissionList
