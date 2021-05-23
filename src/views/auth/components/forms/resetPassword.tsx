import React from 'react'
import { useHistory } from 'react-router-dom'
import { Form, FormikProps, Formik } from 'formik'
import * as Yup from 'yup'
import { Button, Main } from '../../../../shared/components'

interface Values {
  password: string
  confirmPassword: string
}
const ResetPasswordForm = () => {
  const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is Required'),
    password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Password is Required'),
  })
  const history = useHistory()
  return (
    <>
      <Formik
        initialValues={{
          confirmPassword: '',
          password: '',
        }}
        validationSchema={ResetPasswordSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            // eslint-disable-next-line
            alert(JSON.stringify(values, null, 2))
            history.push('/login')
            actions.setSubmitting(false)
          }, 1000)
        }}
      >
        {(props: FormikProps<Values>) => (
          <Form>
            <Main name="password" type="password" label="Password" required />
            <Main className="mb-4" name="confirmPassword" type="password" label="Re-type password" required />

            <Button disabled={!props.isValid && !props.isInitialValid} className="default mt-4" type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default ResetPasswordForm
