import React from 'react'
import { Logo } from '../picture'
import { DashboardSidebar } from './Styles'
import { SidebarProps } from '../../typings'

function Sidebar({ bottom, children }: SidebarProps) {
  return (
    <DashboardSidebar className="sidebar-wrapper sidebar-theme py-5">
      <div className="px-5 w-100">
        <Logo />
      </div>

      <nav id="sidebar">
        <div className="shadow-bottom" />
        <ul className="list-unstyled menu-categories" id="">
          {children}
        </ul>
        <hr className="border-warning w-10 border-top-1 border" />
        <ul className="list-unstyled menu-categories" id="">
          {bottom}
        </ul>
      </nav>
    </DashboardSidebar>
  )
}

Sidebar.defaultProps = {
  bottom: [],
  links: [
    {
      name: 'dashboard',
      location: 'dashboard',
      sublinks: [{ location: 'expenses' }],
    },
    {
      name: 'businesses',
      location: 'business',
    },
  ],
}
export default Sidebar
