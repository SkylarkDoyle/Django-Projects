// import React, { Component } from 'react';
// import { Helmet } from 'react-helmet';
// import { DashboardLayout } from '../../../../shared/layout';
// import { NavLinks } from '../../components';
// import HomeRoutes from '../../routes/home.routes';

// export default class Index extends Component {
//   state = { activeClass: false };

//   componentDidMount() {
//     console.log(this.props);
//   }

//   render() {
//     return (
//       <>
//         {/* this component handles setting the title and dynamically injecting head specific tags */}
//         <Helmet>
//           <meta charSet="utf-8" />
//           <title>Dashboard Page - Ace App</title>
//         </Helmet>
//         <div id="" className="d-flex justify-content-start align-items-start">
//           <DashboardLayout
//             sidebar={this.props.topNavLinks.map((link) => (
//               <NavLinks key={link.id} {...link} />
//             ))}
//           >
//             <HomeRoutes match={this.props.match} />
//           </DashboardLayout>
//         </div>
//       </>
//     );
//   }
// }

// Index.defaultProps = {
//   topNavLinks: [
//     {
//       id: Math.random(),
//       name: 'Trial & Price',
//       location: 'dashboard/home/trial-and-price',
//     },
//     {
//       id: Math.random(),
//       name: 'Paymnet Method',
//       location: 'dashboard/home/payment-method',
//     },
//   ],
// };
import * as React from 'react'

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
      <div>
        {message}
        {' '}
        {count}
      </div>
    )
  }
}
