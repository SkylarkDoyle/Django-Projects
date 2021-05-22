import styled from 'styled-components'

export type Typeface = {
  margin: string
  width: string
  height: string
  resize: string
  fontSize: string
  color: string
  'data-testid': string
}

export const Header = styled.h1<Partial<Typeface>>`
  color: ${({ color, theme }) => (color ? theme?.color(color) || color : theme?.color('onyx'))};
  text-transform: capitalize;
  margin: ${(props) => props.margin};
  font-style: normal;
  font-weight: bold;
  font-size: ${({ fontSize, theme }) => (fontSize ? theme?.fontSize(fontSize) || fontSize : '32px')};
  line-height: 50px;
  letter-spacing: 0.01em;
`
Header.defaultProps = { margin: '0 0 16px' }
export const SubHeader = styled.h3<Partial<Typeface>>`
  font-style: normal;
  font-weight: normal;
  font-size: ${({ fontSize, theme }) => (fontSize ? theme?.fontSize(fontSize) || fontSize : '16px')};
  line-height: 28px;
  color: ${({ color, theme }) => (color ? theme?.color(color) || color : theme?.color('sonic_silver'))};
  margin: ${(props) => props.margin};
`
SubHeader.defaultProps = { margin: '0 0 16px' }

export const Title = styled(SubHeader)<Partial<Typeface>>`
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  font-size: ${({ fontSize, theme }) => (fontSize ? theme?.fontSize(fontSize) || fontSize : '24px')};
  color: ${({ color, theme }) => (color ? theme?.color(color) || color : theme?.color('solid_pink'))};
  margin: ${(props) => props.margin};
`
Title.defaultProps = { margin: '0 0 16px' }

export const SubTitle = styled(SubHeader)`
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  font-size: ${({ fontSize, theme }) => (fontSize ? theme?.fontSize(fontSize) || fontSize : '16px')};
  color: ${({ color, theme }) => (color ? theme?.color(color) || color : theme?.color('sonic_silver'))};
  margin: ${(props) => props.margin};
`
SubTitle.defaultProps = { margin: '0 0 16px' }

export const Label = styled.span`
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0px;
  text-align: left;
  color: ${(props) => props.theme?.color('text_help_grey')};
`
export const BoldLabel = styled(Label)`
  font-size: 11px;
  line-height: 16px;
  bdi {
    color: ${({ theme }) => theme?.color('english_red')};
  }
`
export const SubLabel = styled(BoldLabel)`
  color: ${({ theme }) => theme?.color('sonic_silver')};
  font-size: 14px;
  line-height: 140%;
`

export const SmallLabel = styled(Label)`
  color: ${({ theme }) => theme?.color('sonic_silver')};
  font-size: 10px;
  letter-spacing: 0px;
  text-align: left;
  font-style: normal;
  font-weight: normal;
  line-height: 140%;
`
export const ErrorMessage = styled.p<Partial<{ isValid: boolean; isEmpty: boolean }>>`
  color: ${({ theme, isValid, isEmpty }) => {
    if (isEmpty) return theme?.color('english_red')
    if (!isValid) return theme?.color('warning_yellow')
    return null
  }};
  font-size: 12px;
  letter-spacing: 0px;
  text-align: left;
  font-style: normal;
  font-weight: normal;
  line-height: 19px;
  margin: 0;
`

export const Anchor = styled.a`
  color: ${({ theme }) => theme?.color('english_red')} !important;
  text-decoration-line: underline !important;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 18px;
  margin: 0;
`
