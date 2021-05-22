// import React, { Component } from 'react';
// import { Helmet } from 'react-helmet';
// import swal from 'sweetalert';
// import validator from 'validator';
// import { Header } from '../../themes/style/typeface';
// import LoginForm from '../../utils/login';

// export default class index extends Component {
//   state={
//     password: '',
//     email: '',
//     loading: false,
//   };

//   handleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   handleUserLogin = () => {
//     const { password, email } = this.state;
//     const { history } = this.props;
//     if (validator.isEmpty(email)) {
//       swal('', 'Please email is required', '');
//       return;
//     }
//     if (validator.isEmpty(password)) {
//       swal('', 'Please password is required', '');
//       return;
//     }
//     if (!validator.isEmpty(password)) {
//       if (password.length < 8) {
//         swal('', 'Password must be at least 8', '');
//         return;
//       }
//       if (password.length > 16) {
//         swal('', 'Password must be at less 16', '');
//         return;
//       }
//     }
//     this.setState({ loading: true });
//     this.props.handleUserLogin({ password, email })
//       .then((res) => {
//         if (res.status !== 200) {
//           this.setState({ loading: false });
//           swal('Ooops!', `${(res.errMessage || res.message) || 'Something went wrong!'}`, 'error');
//           return;
//         }
//         this.setState({ loading: false }, () => history.push('/dashboard'));
//       });
//   };

//   render() {
//     return (
//       <>
//         {/* this component handles setting the title and dynamically injecting head specific tags */}
//         <Helmet>
//           <meta charSet="utf-8" />
//           <title>Login Page - Ace App</title>
//         </Helmet>
//         <div id="page_login" className="d-flex flex-column justify-content-center align-items-center pt-5">
//           <Header className="text-center">Login Form</Header>
//           <LoginForm {...this.state} onChange={this.handleChange} handleUserLogin={this.handleUserLogin} />
//         </div>
//       </>
//     );
//   }
// }

import * as React from 'react'
import {AuthLayout} from '../../../../shared/layout'

interface Props {
  // using `interface` is also ok
  message: string
}
type State = {
  count: number // like this
}
export default class Index extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      // optional second annotation for better type inference
      count: 0,
    }
  }

  render() {
    const { message } = this.props
    const { count } = this.state
    return (
      <AuthLayout>
      <div>
        {message}
        {'Login '}
        {count}
      </div>
      </AuthLayout>
    )
  }
}
