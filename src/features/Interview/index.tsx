import NotFound from '@/components/NotFound'
import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import AddQuestionPage from './pages/AddQuestion'
import EditQuestionPage from './pages/EditQuestion'
import MainPage from './pages/Main'

const Interview: React.FC = () => {
  const match = useRouteMatch()

  return (
    <Switch>
      <Route exact path={match.url} component={MainPage} />

      <Route path={`${match.url}/add`} component={AddQuestionPage} />
      <Route path={`${match.url}/edit/:questionId`} component={EditQuestionPage} />

      <Route component={NotFound} />
    </Switch>
  )
}

export default Interview
