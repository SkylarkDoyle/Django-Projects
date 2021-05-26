import * as React from 'react'
import { Helmet } from 'react-helmet'
import { AuthLayout } from '../../../../shared/layout'
import { Header, SubHeader, Anchor } from '../../../../shared/themes/style/stylc/shared/components'
import { AddBusinessForm } from '../../components'
import { Wrapper } from './styles'

interface Props {
  //  using `interface` is also ok
  message?: string
}
type State = {
  count?: number // like this
}

const imageStyle = { height: '70px', weight: '50px' }
const upload = 'https://image.shutterstock.com/image-vector/upload-icon-trendy-flat-style-260nw-1697806396.jpg'

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
        <AuthLayout>
          <Wrapper className="container px-4 d-flex justify-content-start align-items-start flex-column">
            <Header>Add Business</Header>
            <SubHeader className="pb-4">Fill correctly the form below to create a business</SubHeader>
            <div className="row justify-content-center align-items-center mt-2 mb-4">
              <div className="col-3">
                <img src={upload} alt="logo" className="rounded-circle" style={imageStyle} />
              </div>
              <div className="col-9">
                <Anchor className="my-4 forget-password" href="">
                  upload business logo
                </Anchor>
                <p style={{ fontSize: '10px' }}> image should be in jpeg or png format</p>
              </div>
            </div>

            <AddBusinessForm />
            <div className="p-4" />
          </Wrapper>
        </AuthLayout>
      </>
    )
  }
}
