import React from 'react'
import { Sidebar } from '../../components'
import { Wrapper } from './styles'
import { LayoutProps } from '../../typings'

const index = ({ children, sidebar }: LayoutProps) => {
  return (
    <Wrapper className="layout-dashboard d-flex justify-content-start align-items-start">
      <Sidebar>{sidebar}</Sidebar>
      <div>{children}</div>
    </Wrapper>
  )
}

export default index
