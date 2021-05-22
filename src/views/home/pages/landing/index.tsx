import * as React from 'react'
import { Helmet } from 'react-helmet'
import { Button } from '../../../../shared/components'
import { Header, SubHeader } from '../../../../shared/themes/style/stylc/shared/components'

interface Props {
  message: string
}
type State = {
  data?: string[]
}
export default class Index extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {}

  render() {
    return (
      <>
        {/*  this component handles setting the title and dynamically injecting head specific tags */}
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home Page</title>
        </Helmet>
        <div id="_home">
          <Header className="text-center" margin="30px auto 5px">
            Welcome to digiftng
          </Header>
          <SubHeader className="text-center" margin="0 auto">
            This WebApp enables you to plan your day <br />
            the way you want
          </SubHeader>

          <SubHeader className="text-center" margin="30px auto 10px">
            Please Login/Register to use the app
          </SubHeader>
          <div className="container mt-5">
            <div className=" d-flex row justify-content-between align-items-center px-5">
              <Button href="/auth/login" role="link">
                Login
              </Button>
              <Button href="/auth/register" role="link">
                Register
              </Button>

              <Button href="/ui-playground" role="link">
                UI Playground
              </Button>
            </div>
          </div>
        </div>
      </>
    )
  }
}
