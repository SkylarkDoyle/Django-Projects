import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PageNotFound from '../../page-not-found'

/**
 * pages
 */

import { Landing } from '../pages'

const HomeRoute = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    {' '}
    <Route component={PageNotFound} />
    {' '}
  </Switch>
)

export default HomeRoute
