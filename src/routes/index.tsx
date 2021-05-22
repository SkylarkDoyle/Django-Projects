import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import JobRoute from '../screens/Job_Entry';
import { HomeRoute as Home } from '../views/home'
import { AuthRoute as Auth } from '../views/auth'
import { UIPlaygroundRoute as UIPlayground } from '../views/ui-playground'

export type RootStackParamListType = {
  [key: string]: {
    path: string
    component: React.FC
    exact: boolean
  }
}

export const BuildRoutes: RootStackParamListType = {
  Home: {
    path: '/',
    component: Home,
    exact: true,
  },
  Auth: {
    path: '/auth',
    component: Auth,
    exact: false,
  },
  UI: {
    path: '/ui-playground',
    component: UIPlayground,
    exact: false,
  },
}

function Routes() {
  return (
    <Switch>
      {(Object.keys(BuildRoutes) as (keyof typeof BuildRoutes)[]).map((name) => (
        <Route key={name} {...BuildRoutes[name]} />
      ))}
      {/* <Route path="/job" component={JobRoute} /> */}
    </Switch>
  )
}
export default Routes
