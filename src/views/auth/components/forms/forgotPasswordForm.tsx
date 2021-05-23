import React from 'react'
import { useHistory } from 'react-router-dom'
import { Form, FormikProps, Formik } from 'formik'
import * as Yup from 'yup'
import { Button, Main } from '../../../../shared/components'

interface Values {
  email: string
}
const ForgotPasswordForm = () => {
  const ForgotPasswordSchema = Yup.object().shape({ email: Yup.string().email('Invalid email').required('Email is Required') })
  const history = useHistory()
  return (
    <>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={ForgotPasswordSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            // eslint-disable-next-line
            alert(JSON.stringify(values, null, 2))
            history.push('/auth/resetpassword')
            actions.setSubmitting(false)
          }, 1000)
        }}
      >
        {(props: FormikProps<Values>) => (
          <Form>
            <Main name="email" type="email" label="Email address" required />
            <Button disabled={!props.isValid && !props.isInitialValid} className="default mt-4" type="submit">
              Sumbit
            </Button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default ForgotPasswordForm
