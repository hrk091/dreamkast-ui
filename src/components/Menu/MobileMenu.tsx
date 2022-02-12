import React from 'react'
import Button from '@material-ui/core/Button'
import * as Styled from './styled'
import * as CommonStyled from '../../styles/styled'

type Props = {
  url: string
}

export const MobileMenu: React.FC<Props> = ({ url }) => {
  return (
    <Styled.MobileMenu>
      <CommonStyled.MenuLink
        href="/o11y2022/ui/discussionboard"
        rel="noreferrer"
      >
        <Button style={{ color: '#423A57' }}>Discussion</Button>
      </CommonStyled.MenuLink>
      <CommonStyled.MenuLink href="/o11y2022/ui/jobboard" rel="noreferrer">
        <Button style={{ color: '#423A57' }}>Job</Button>
      </CommonStyled.MenuLink>
      <CommonStyled.MenuLink href="/o11y2022/timetables" rel="noreferrer">
        <Button style={{ color: '#423A57' }}>Timetable</Button>
      </CommonStyled.MenuLink>
      <Button href={url} style={{ color: '#423A57' }}>
        Logout
      </Button>
    </Styled.MobileMenu>
  )
}
