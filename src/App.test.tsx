/* eslint-disable */
// import * as  React from 'react';
import { render, cleanup } from '@testing-library/react'
// import { JobProvider, initialState as defaultState } from './context/JobContext';
import App from './App'

// import getJobsByCategory from './services/apis/handleGetJobs';

// jest.mock('./services/apis/handleGetJobs');

// let CreateProvider: any;
// let providerRender: any;

// const initialState = { ...defaultState };
// const mockDispatch = jest.fn;

// const jobFetchActions = (fn: any) => ({
//   loadJobs: fn(async () => {
//     await getJobsByCategory();
//   }),
// });

// afterAll((done) => {
//   done();
// });

// beforeEach(() => {
//   CreateProvider = ({ children, customizedState = {}, actions = {} }: any) => (
//     <JobProvider state={customizedState} newActions={actions}>
//       {children}
//     </JobProvider>
//   );
//   providerRender = (
//     ui: any,
//     options = {},
//     customizedState = initialState,
//     actions = { ...jobFetchActions(mockDispatch) },
//   ) => {
//     const Wrapper = ({ children }: any) => (
//       <CreateProvider customizedState={customizedState} actions={actions}>
//         {children}
//       </CreateProvider>
//     );

//     return render(ui, { wrapper: Wrapper, ...options });
//   };
// });
// afterEach(cleanup);

describe('<App/>', () => {
  it('Must render <App/> component properly', () => {
    const { baseElement } = render(<App />)
    expect(baseElement).toMatchSnapshot()
  })
})
