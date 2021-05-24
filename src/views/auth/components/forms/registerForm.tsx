import React from 'react'
import { Form, FormikProps, Formik } from 'formik'
import * as Yup from 'yup'
import { Button, Main } from '../../../../shared/components'

interface Values {
  firstName: string
  lastName: string
  email: string
}
const SignupForm = () => {
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('First Name Required'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Last Name Required'),
    email: Yup.string().email('Invalid email').required('Email is Required'),
    password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Password is Required'),
  })
  return (
    <>
      <Formik
        initialValues={{
          password: '',
          email: '',
          firstName: '',
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
            <Main name="email" type="email" label="Email Address" required />
            <Main name="password" type="password" label="Password" required />
            <Button disabled={!props.isValid && !props.isInitialValid} type="submit">
              Sign up
            </Button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default SignupForm
