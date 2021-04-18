import React from 'react'
import { useParams } from 'react-router'

const DetailQuestionPage: React.FC = () => {
  const { questionId } = useParams<any>()

  return <div>Detail question {questionId}</div>
}

export default DetailQuestionPage
