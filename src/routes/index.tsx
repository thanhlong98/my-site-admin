import Loading from '@/components/Loading'
import NotFound from '@/components/NotFound'
import MasterLayout from '@/layout/MasterLayout'
import React, { Suspense } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { masterRoute } from './master.route'
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

          <Route>
            <MasterLayout>
              <Suspense fallback={<Loading />}>
                <Switch>
                  {masterRoute}

                  <Redirect to='/404' />
                </Switch>
              </Suspense>
            </MasterLayout>
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default Routes
