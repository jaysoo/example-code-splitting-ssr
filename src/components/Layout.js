import React from 'react'
import styled from 'styled-components'

const Layout = ({ children, className }) =>
  <Container className={className}>
    {children}
  </Container>

const Container = styled.div`
  display: flex;
`

export default Layout
