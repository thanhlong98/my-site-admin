import Loading from '@/components/Loading'
import NotFound from '@/components/NotFound'
import MainLayout from '@/layout/MainLayout'
import React, { Suspense } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { protectedRoute } from './protected.route'
import { publicRoute } from './public.route'
import { restrictedRoute } from './restricted.route'

const Routes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Switch>
          {publicRoute}

          {restrictedRoute}

          <Route exact path='/404' component={NotFound} />

          <Route
            component={() => (
              <MainLayout>
                <Switch>
                  {protectedRoute}
                  <Redirect to='/404' />
                </Switch>
              </MainLayout>
            )}
          />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default Routes
