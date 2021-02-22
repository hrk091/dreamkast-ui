import styled from 'styled-components'

import Toolbar from '@material-ui/core/Toolbar'

export const Container = styled.div`
  background: rgba(255, 255, 255, 0.6);
`

export const Header = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  color: #282828;
`

export const HeaderImg = styled.img`
  height: 50px;
`

export const ChildrenContainer = styled.div`
  padding-bottom: 5%;
`

export const Footer = styled.footer`
  background-color: #fff;
  width: 100%;
  height: 6vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const FooterText = styled.div`
  font-size: 14px;
  color: gray;
`
export const FooterLink = styled.a`
  text-decoration: none;
  font-size: 14px;
  color: gray;
`