import React from 'react'
import Button from '@material-ui/core/Button'
import * as Styled from './styled'

type Props = {
  url: string
}

export const MobileMenu: React.FC<Props> = ({ url }) => {
  return (
    <Styled.MobileMenu>
      <Styled.MenuLink href="/cndo2021/ui#booths" rel="noreferrer">
        <Button style={{ color: '#037f8c' }}>Booths</Button>
      </Styled.MenuLink>
      <Styled.MenuLink
        href="/cndo2021/ui/discussionboard"
        target="_blank"
        rel="noreferrer"
      >
        <Button style={{ color: '#037f8c' }}>Discussion</Button>
      </Styled.MenuLink>
      <Styled.MenuLink
        href="/cndo2021/timetables"
        target="_blank"
        rel="noreferrer"
      >
        <Button style={{ color: '#037f8c' }}>Timetable</Button>
      </Styled.MenuLink>
      <Button href={url} style={{ color: '#037f8c' }}>
        Logout
      </Button>
    </Styled.MobileMenu>
  )
}
