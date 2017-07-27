// @flow
import React from 'react'
import styled from 'styled-components'
import screenshot from './screenshot.png'

const Home = ({ match }: { match: any }) =>
  <Container>
    <h1>
      Home
    </h1>
    <p>Hello! Welcome to the home page.</p>
    <p>I recommend opening DevTools in your browser when playing around with this demo.</p>
    <img src={screenshot}/>
  </Container>

const Container = styled.div`
  > h1 {
    color: magenta;
  }
  
  > img {
    max-width: 100%;
  }
`

export default Home
