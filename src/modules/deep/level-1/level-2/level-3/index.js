import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LevelThree = ({ match }) =>
  <Container>
    <h2>Welcome to level 3!</h2>
    <p>
      This is the end!
      {' '}
      <Link to="/deep">
        Go back?
      </Link>
    </p>
  </Container>

const Container = styled.div`
  color: olivedrab;
`

export default LevelThree
