import React from 'react'
import styled from 'styled-components'
import { Link, Route } from 'react-router-dom'
import { Module } from '../../../components'

const LevelOne = ({ match }) =>
  <Container>
    <h2>Welcome to level 1!</h2>
    <p>Go down further to
      {' '}
      <Link to={`${match.url}/level-2`}>
        level 2
      </Link>
      ...
    </p>
    <Route
      path={`${match.url}/level-2`}
      render={({ match }) =>
        <Module {...this.props} match={match} loader={import('./level-2')} />}
    />
  </Container>

const Container = styled.div`
  color: palevioletred;
`

export default LevelOne
