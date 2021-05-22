import React from 'react'
import { Route, Switch, RouteComponentProps } from 'react-router-dom'

/**
 * pages
 */

// import { TrialPrice } from '../pages';

const isMatched = (url: string, location = '') => {
  const [route] = url.split(':')
  return `${route}${location}`
}
const DashboardHomeRoute = ({ match }: RouteComponentProps<{path:string}>) => (
  <Switch>
    {/* <Route
      path={`${isMatched(match.path, 'trial-and-price')}`}
      component={TrialPrice}
    /> */}
    {' '}
    <Route
      path={`${isMatched(match.path, 'payment-method')}`}
      component={() => <div>paymen method</div>}
    />
    {' '}
  </Switch>
)

export default DashboardHomeRoute
