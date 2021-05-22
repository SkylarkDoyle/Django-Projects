import styled from 'styled-components'
import { StyledProps } from '../../typings'

export const DashboardSidebar = styled.section<StyledProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${({ theme }) => theme.color('black') || 'black'};
  color: white;
  ul {
    margin-top: 64px;
    width: 100%;
    list-style: none;
  }
  hr {
    border-style: dashed !important;
    margin: 16px 50px;
    opacity: 0.6;
  }
`

DashboardSidebar.defaultProps = {
  width: '30%',
  height: '100%',
}
