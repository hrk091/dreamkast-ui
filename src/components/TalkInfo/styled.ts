import styled from 'styled-components'

export const Container = styled.div`
  height: 450px;
  background: rgba(255, 255, 255, 0.7);
  padding: 10px;
  border-radius: 10px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const Title = styled.h2`
  color: #037f8c;
`

export const Content = styled.div`
  padding: 10px 0;
`
