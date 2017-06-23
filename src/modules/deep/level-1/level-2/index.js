import React from 'react'
import styled from 'styled-components'
import { Link, Route } from 'react-router-dom'
import { Module } from '../../../../components'

const LevelTwo = ({ match }) =>
  <Container>
    <h2>Welcome to level 2!</h2>
    <p>Go down further to
      {' '}
      <Link to={`${match.url}/level-3`}>
        level 3
      </Link>
      ...
    </p>
    <Route
      path={`${match.url}/level-3`}
      render={({ match }) =>
        <Module {...this.props} match={match} from={import('./level-3')} />}
    />
  </Container>

const Container = styled.div`
  color: peachpuff;
`

export default LevelTwo
