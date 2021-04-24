import { Col, Input, Row } from 'antd'
import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

const Answer: React.FC = () => {
  const [answer, setAnswer] = useState('')

  return (
    <Row gutter={8}>
      <Col xs={24} md={12}>
        <Input.TextArea
          style={{ height: '100%' }}
          onChange={(e) => setAnswer(e.target.value)}
        />
      </Col>
      <Col xs={24} md={12}>
        <div className="interview__question-answer">
          <ReactMarkdown remarkPlugins={[gfm]} children={answer} />
        </div>
      </Col>
    </Row>
  )
}

export default Answer
