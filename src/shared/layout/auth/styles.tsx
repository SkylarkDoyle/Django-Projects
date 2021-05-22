import styled from 'styled-components'
import { StyledProps } from '../../typings'

export const Wrapper = styled.section<StyledProps>`
  width: ${(props: StyledProps) => props.width};
  height: ${(props: StyledProps) => props.height};
`
Wrapper.defaultProps = {
  width: '100%',
  height: '100vh',
}
