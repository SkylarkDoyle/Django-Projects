import React from 'react'
import { useHistory } from 'react-router-dom'
import { Form, FormikProps, Formik } from 'formik'
import * as Yup from 'yup'
import { Button, Main } from '../../../../shared/components'
import { Anchor } from '../../../../shared/themes/style/stylc/shared/components'

interface Values {
  password: string
  email: string
}
const LoginForm = () => {
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is Required'),
    password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Password is Required'),
  })
  const history = useHistory()
  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            // eslint-disable-next-line
            alert(JSON.stringify(values, null, 2))
            history.push('/dashboard')
            actions.setSubmitting(false)
          }, 1000)
        }}
      >
        {(props: FormikProps<Values>) => (
          <Form>
            <Main name="email" type="email" label="Email address" required />
            <Main className="mb-4" name="password" type="password" label="Password" required />

            <Anchor className="my-4 forget-password" href="/auth/forgotpassword">
              Forgot password?
            </Anchor>
            <Button disabled={!props.isValid && !props.isInitialValid} className="default mt-4" type="submit">
              Sign in
            </Button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default LoginForm
