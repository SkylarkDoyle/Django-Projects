import React from 'react'
import { DashboardSidebar } from '../../components'
import { Wrapper } from './styles'

import { LayoutProps } from '../../typings'

const index = ({ children, sidebar, ...props }: LayoutProps) => {
  return (
    <Wrapper className="layout-dashboard d-flex justify-content-centent align-items-start">
      <DashboardSidebar>{sidebar}</DashboardSidebar>
      <div>{children}</div>
    </Wrapper>
  )
}

export default index
