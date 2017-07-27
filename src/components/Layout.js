// @flow
import React from 'react'
import styled from 'styled-components'

type IProps = {
  children?: React.Element<*>,
  className?: string
}

const Layout = ({ children, className }: IProps) =>
  <Container className={className}>
    {children}
  </Container>

const Container = styled.div`
  display: flex;
`

export default Layout
