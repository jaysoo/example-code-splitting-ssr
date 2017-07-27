// @flow
import React from 'react'
import styled from 'styled-components'
import { Link, Route } from 'react-router-dom'
import { Module } from '../../components'

const Deep = ({ match }: { match: any }) =>
  <Container>
    <h1>Deep nesting example</h1>
    <p>
      Each level here will dynamically import a chunk on the client-side.</p>
    <p>
      However, on the server-side, it will be a synchronous render.
    </p>
    <p>
      Go down
      {' '}
      <Link to={`${match.url}/level-1`}>
        one level
      </Link>
      ...
    </p>
    <Route
      path={`${match.url}/level-1`}
      render={({ match }) =>
        <Module match={match} loader={import('./level-1')} />}
    />
  </Container>

const Container = styled.div`
  color: steelblue;
`

export default Deep
