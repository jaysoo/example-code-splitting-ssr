import React from 'react'
import styled from 'styled-components'

const Main = ({ children }) =>
  <Container>
    {children}
  </Container>

const Container = styled.main`
  font-size: 18px;
  flex: 1;
`

export default Main
