import styled from 'styled-components'

export const Wrapper = styled.section`
  form {
    width: 100%;
    .forget-password {
      font-weight: 600;
      font-size: 11px;
      line-height: 16px;
      /* identical to box height */
      text-align: center;
      letter-spacing: 0.01em;
    }
  }
  // media queries
  ${({ theme }) => `
  @media ${theme.breakpoint('tablet')}{
    flex-direction: row;
    padding-top: 100px;
    padding-left: 108px !important;
    width: 450px;
  }
`}
`
