import React from 'react'
import { Logo } from '../picture'
import { Sidebar } from './Styles'
import { SidebarProps } from '../../typings'
import LogoImage from '../../themes/assets/images/gromoni.svg'
import { Header } from '../../themes/style/stylc/shared/components'

/**
 * @description Only {Header} is visible on the sidebar the rest are hidden with css
 * @param {SidebarProps} { bottom, children }
 * @returns
 */
function SideBar({ bottom, children }: SidebarProps) {
  return (
    <Sidebar className="sidebar-wrapper sidebar-theme py-5 d-flex justify-content-center align-items-center flex-column">
      <div className="sidebar_logo px-4 w-100 d-flex justify-content-start align-items-center">
        <Logo src={LogoImage} alt="gromoni-text-logo" />
        <Header margin="0" className="logo_text text-uppercase">
          gromoni
        </Header>
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
    </Sidebar>
  )
}

SideBar.defaultProps = {}
export default SideBar
