import * as React from 'react'
import { Helmet } from 'react-helmet'
import { AuthLayout } from '../../../../shared/layout'
import { Header, SubHeader, Anchor, SubTitle } from '../../../../shared/themes/style/stylc/shared/components'
import { RegisterForm, Socials } from '../../components'
import { Wrapper } from './styles'

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
          <title>Register Page - Gromoni</title>
        </Helmet>
        <AuthLayout>
          <Wrapper className="container px-4 d-flex justify-content-start align-items-start flex-column">
            <Header>Sign in</Header>
            <SubHeader className="pb-4">
              Already have an account?
              <Anchor className="ml-2" href="/auth/login">
                Sign in
              </Anchor>
            </SubHeader>
            <RegisterForm />
            <SubTitle margin="32px 0 0">Or sign in with the following options</SubTitle>
            <Socials />
          </Wrapper>
        </AuthLayout>
      </>
    )
  }
}
