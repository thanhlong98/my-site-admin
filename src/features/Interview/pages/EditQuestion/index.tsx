import React from 'react'
import { useParams } from 'react-router'

const EditQuestionPage: React.FC = () => {
  const { questionId } = useParams<any>()

  return (
    <div>
      <h1>{questionId}</h1>
      <p>Edit Question Page</p>
    </div>
  )
}

export default EditQuestionPage
