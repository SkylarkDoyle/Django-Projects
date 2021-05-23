import styled from 'styled-components'
import { StyledProps } from '../../typings'
import BackgroundOne from '../../themes/assets/images/sidebar_background_one.png'
import BackgroundTwo from '../../themes/assets/images/sidebar_background_two.png'

export const Sidebar = styled.section<StyledProps>`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '15%'};
  background-color: ${({ theme }) => theme.color('white') || 'brand_color'};
  color: ${({ theme }) => theme.color('brand_color') || 'white'};
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */
  letter-spacing: 0.01em;
  text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  .sidebar_logo > img,
  #sidebar {
    display: none;
  }
  .sidebar_logo {
    /* padding-left: 24px; */
    .logo_text {
      font-size: 16px;
      line-height: 24px;
      color: ${({ theme }) => theme.color('brand_color') || 'white'};
    }
  }

  // media queries
  ${({ width, height, theme }) => `
  @media ${theme.breakpoint('tablet')}{
    width: ${width || '30%'};
    height: ${height || '100%'};
    background-color: ${theme.color('brand_color') || 'white'};
    // background-image: url(${BackgroundOne}), url(${BackgroundTwo});
    background-position: right bottom, left top;
    background-repeat: no-repeat, no-repeat;
    color: ${theme.color('white') || 'status'};
    font-size: 40px;
    line-height: 60px;
    /* identical to box height */
    letter-spacing: 0.01em;
    text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    .sidebar_logo {
      justify-content: center !important;
      .logo_text{
        font-size: 40px;
        line-height: 60px;
        color: ${theme.color('white') || 'status'};
      }
    }
`}
`
Sidebar.defaultProps = {
  width: '',
  height: '',
}

export const DashboardSidebar = styled(Sidebar)<StyledProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${({ theme }) => theme.color('brand_color') || 'black'};
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
