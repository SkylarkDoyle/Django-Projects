import * as React from 'react'
import { Helmet } from 'react-helmet'
import { AuthLayout } from '../../../../shared/layout'

interface Props {
  //  using `interface` is also ok
  message?: string
}
type State = {
  count?: number // like this
}
export default class Index extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    // optional second annotation for better type inference
    this.state = {}
  }

  render() {
    return (
      <>
        {/* this component handles setting the title and dynamically injecting head specific tags */}
        <Helmet>
          <meta charSet="utf-8" />
          <title>Login Page - Gromoni</title>
        </Helmet>
        <AuthLayout>this is a fun</AuthLayout>
      </>
    )
  }
}
