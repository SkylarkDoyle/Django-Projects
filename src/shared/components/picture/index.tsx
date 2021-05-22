import React from 'react'
import styled from 'styled-components'
import LogoIcon from '../../themes/assets/images/logo.svg'
import { StyledProps } from '../../typings'

const LogoIMG = styled.img.attrs((props: StyledProps) => ({
  src: props.src || LogoIcon,
  width: props.width || '50px',
  height: props.height || '35px',
  margin: props.margin,
}))`
  width: ${(props: StyledProps) => props.width};
  height: ${(props: StyledProps) => props.height};
  margin: ${(props: StyledProps) => props.margin};
`
export const Logo = ({
  onClick,
  ...props
}: {
  alt?: string
  className?: string
  id?: string
  height?: string
  onClick?: () => void
  margin?: string
  src?: StyledProps['src']
  width?: string
}) => <LogoIMG onClick={onClick} {...props} />

Logo.defaultProps = {
  alt: '',
  className: '',
  id: '',
  height: '',
  onClick: () => {},
  margin: '',
  src: '',
  width: '',
}
