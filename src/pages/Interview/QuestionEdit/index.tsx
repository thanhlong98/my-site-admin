import React from 'react'
import { useParams } from 'react-router'

const InterviewQuestionEdit: React.FC = () => {
  const { questionId } = useParams<any>()

  return (
    <div>
      <h1>{questionId}</h1>
      <p>Edit Question Page</p>
    </div>
  )
}

export default InterviewQuestionEdit
