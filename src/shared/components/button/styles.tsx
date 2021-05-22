/* eslint max-len: ["off"] */
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import { StyledProps } from '../../typings'

type ButtonProps = StyledProps & {
  disabled: boolean
}

export const Container = styled(Button)<ButtonProps>`
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  border: 1px solid ${({ border, theme }) => (border ? theme?.color(border) || border : theme?.color('transparent'))};
  text-align: center;
  font-style: normal;
  font-weight: 600;
  font-size: ${({ fontSize, theme }) => (fontSize ? theme?.fontSize(fontSize) || fontSize : '13px')};
  line-height: 19px;
  cursor: pointer;
  color: ${({ color, theme }) => (color ? theme?.color(color) || color : theme?.color('white'))};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ? theme.color(backgroundColor) || backgroundColor : theme?.color('brand_color')};
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    color: ${({ theme }) => theme?.color('white')};
    background-color: ${({ theme }) => theme?.color('sonic_silver')};
  }
  &[disabled] {
    opacity: 0.2 !important;
    background-color: ${({ theme }) => theme?.color('brand_color')} !important;
    pointer-events: none;
  }
  &.default {
    background-color: ${({ theme }) => theme?.color('brand_color')} !important;
    :hover {
      background-color: ${({ theme }) => theme?.color('brand_color:hover')} !important;
    }
    :active {
      background-color: ${({ theme }) => theme?.color('brand_color:active')} !important;
    }
  }
  &.secondary {
    background-color: ${({ theme }) => theme?.color('white')} !important;
    border: 1px solid ${({ theme }) => theme?.color('brand_color')} !important;
    color: ${({ theme }) => theme?.color('brand_color')} !important;
    :hover {
      border: 1px solid ${({ theme }) => theme?.color('brand_color:hover')} !important;
      color: ${({ theme }) => theme?.color('brand_color:hover')} !important;
    }
    :active {
      border: 1px solid ${({ theme }) => theme?.color('brand_color:active')} !important;
      color: ${({ theme }) => theme?.color('brand_color:active')} !important;
    }
    &[disabled] {
      background-color: ${({ theme }) => theme?.color('white')} !important;
    }
  }
  &.tertiary {
    background-color: ${({ theme }) => theme?.color('white')} !important;
    border: 1px solid ${({ theme }) => theme?.color('transparent')} !important;
    color: ${({ theme }) => theme?.color('brand_color')} !important;
    :hover {
      border: 1px solid ${({ theme }) => theme?.color('transparent')} !important;
      color: ${({ theme }) => theme?.color('brand_color:hover')} !important;
    }
    :active {
      border: 1px solid ${({ theme }) => theme?.color('transparent')} !important;
      color: ${({ theme }) => theme?.color('brand_color:active')} !important;
    }
    &[disabled] {
      background-color: ${({ theme }) => theme?.color('white')} !important;
    }
  }
`
Container.defaultProps = {
  width: '240px',
  margin: '16px 0px',
  height: '50px',
  borderRadius: '4px',
  fontSize: '12px',
}
