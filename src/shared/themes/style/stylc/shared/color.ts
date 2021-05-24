const colors: { [index: string]: string } = {
  brand_color: '#2249AE',
  'brand_color:hover': '#3E65C8',
  'brand_color:active': '#5076D6',
  text_help_gray: '#818E9B',
  table_black: '#323C47',
  text_line: '#D3D8DD',
  black: '#192A3E',
  error: '#EB3E5D',
  information: '#FFB336',
  success: '#66AC4C',
  status: '#8452FF',
  table_gray: '#707683',
  dark_blue: '#334D6E',
  gray: '#90A0B7',
  icon_gray: '#C2CFE0',
  white: '#FFFFFF',
  transparent: 'transparent',
}

const color = (colorName: string): string => (colorName ? colors[colorName] : '')

export default color
