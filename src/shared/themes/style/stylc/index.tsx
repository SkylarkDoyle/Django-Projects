import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './shared/main'

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default ThemeWrapper
