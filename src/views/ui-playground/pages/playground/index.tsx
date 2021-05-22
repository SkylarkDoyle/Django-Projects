import React, { PureComponent } from 'react'
import { Form, FormikProps, Formik } from 'formik'
import * as Yup from 'yup'
import { Button, Main } from '../../../../shared/components'
import { Header, Title, SubTitle } from '../../../../shared/themes/style/stylc/shared/components'

interface Values {
  firstName: string
  lastName: string
  email: string
}
export default class Index extends PureComponent {
  render() {
    const SignupSchema = Yup.object().shape({
      firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
      lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    })
    return (
      <div className="p-5 w-100">
        <Header>this is the ui playground</Header>

        <div className="buttons">
          <Title>this is the buttons playground</Title>
          <div className="d-flex w-75 flex-wrap justify-content-between">
            {/* you can pass props to the component or use className */}
            <div>
              <p> using classes for styling</p>
              <Button className="bg-white border-warning text-danger">this is coded red for text</Button>
            </div>

            <div>
              <p> using props for styling</p>
              <Button className="">this is coded blue for the background</Button>
            </div>

            <div>
              <p> using props href for route</p>
              <Button backgroundColor="focus_blue" href="/">
                this links to the home page
              </Button>
            </div>

            <div>
              <p> using props to show laoding and disabled</p>
              <Button loading disabled href="/">
                this button is disabled and laoding
              </Button>
            </div>

            <div className="mx-4">
              <p> this is the default Button</p>
              <Button className="default">Default button</Button>
              <Button className="default" disabled>
                Default button
              </Button>
            </div>

            <div className="mx-4">
              <p> this is the secondary Button</p>
              <Button className="secondary">Secondary button</Button>
              <Button className="secondary" disabled>
                Secondary button
              </Button>
            </div>
            <div className="mx-4">
              <p> this is the tertiary Button</p>
              <Button className="tertiary">Tertiary button</Button>
              <Button className="tertiary" disabled>
                Tertiary button
              </Button>
            </div>
          </div>
        </div>

        <div className="forms w-50">
          <Title>this is the form playground</Title>

          <SubTitle>My Form</SubTitle>

          <Formik
            initialValues={{
              email: '',
              firstName: 'red',
              lastName: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                // eslint-disable-next-line
                alert(JSON.stringify(values, null, 2))

                actions.setSubmitting(false)
              }, 1000)
            }}
          >
            {(props: FormikProps<Values>) => (
              <Form>
                <Main name="firstName" type="text" label="First Name" required />
                <Main name="lastName" type="text" label="Last Name" required />
                <Main name="email" type="email" label="Email" required />
                <Main name="password" type="password" label="Password" required />
                <Button disabled={!props.isValid && !props.isInitialValid} type="submit">
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    )
  }
}
