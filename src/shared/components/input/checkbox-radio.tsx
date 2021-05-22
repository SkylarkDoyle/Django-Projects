import React from 'react'
import * as Form from '../../themes/style/stylc/shared/components'

type CheckBoxInputProps = {
  label?: string
  children?: React.ReactNode
  checked?: boolean | undefined
  placeholder?: string
  onKeyUp?: (event: React.SyntheticEvent) => void
  small?: string
  inputRef?:
    | ((((instance: HTMLLabelElement | null) => void) | React.RefObject<HTMLLabelElement> | null) &
        React.RefObject<HTMLInputElement | HTMLLabelElement>)
    | undefined
  validate?: (value: unknown) => undefined | string | Promise<unknown>
  multiple?: boolean
  name: string
  className?: string
  required?: boolean
  type?: 'number' | 'text' | 'tel' | 'radio' | 'password' | 'checkbox' | 'date' | 'email' | undefined
  value?: string
  id?: string
  margin?: string
}

const CheckBoxInput = ({ children, label, name, type, className, checked, ...props }: CheckBoxInputProps) => (
  <Form.CheckBoxLabel className={className} type={type}>
    <Form.MainLabel className="mb-0">
      <Form.BoldLabel className="input-label"> {children || label} </Form.BoldLabel>
    </Form.MainLabel>
    <Form.CheckBox name={name} type={type} checked={checked} {...props} />
    <span className="checkmark" />
  </Form.CheckBoxLabel>
)

CheckBoxInput.defaultProps = {
  children: {},
  checked: false,
  label: '',
  placeholder: '',
  onKeyUp: () => {},
  small: '',
  inputRef: {},
  validate: () => {},
  multiple: false,
  type: 'text',
  value: '',
  required: false,
  id: '',
  margin: '',
  className: '',
}
export default CheckBoxInput
