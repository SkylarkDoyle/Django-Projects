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



const AddBusinessForm = () => {
    const AddBusinessSchema = Yup.object().shape({
        BusinessCategory: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Business category Required'),
        BusinessName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Business Name Required'),
        BusinessEmail: Yup.string().email('Invalid email').required('Business Email is Required'),
        BusinessPhoneNumber: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Business Phone Number is Required'),
        BusinessLocation: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Business Location is Required'),

    })
    const history = useHistory()
    return (
        <>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={AddBusinessSchema}
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
                        <Main name="BusinessCategory" type="text" label="BusinessCategory" required />
                        <Main name="BusinessName" type="text" label="BusinessName" required />
                        <Main name=" BusinessEmail" type="email" label="BusinessEmail" required />
                        <Main name="BusinessPhoneNumber" type="text" label="BusinessPhoneNumber" required />
                        <Main name="BusinessLocation" type="text" label="BusinessLocation" required />

                        <Button disabled={!props.isValid && !props.isInitialValid} type="submit">
                            Create business
           </Button>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default AddBusinessForm
