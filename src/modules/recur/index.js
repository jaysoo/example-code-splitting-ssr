import React from 'react'
import styled from 'styled-components'
import { Link, Route, Switch } from 'react-router-dom'

const OptionOne = () =>
  <div>
    You choose option <strong>one</strong>.
  </div>

const OptionTwo = () =>
  <div>
    You choose option <strong>two</strong>.
  </div>

const Recur = ({ match }) =>
  <Container>
    <p>
      Choose and option...
    </p>
    <ul>
      <li>
        <Link to={`${match.url}/one`}>
          Option One
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/two`}>
          Option Two
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/recur`}>
          Recurse!
        </Link>
      </li>
    </ul>

    <Switch>
      <Route path={`${match.url}/one`} component={OptionOne} />
      <Route path={`${match.url}/two`} component={OptionTwo} />
      <Route path={`${match.url}/recur`} render={({ match }) => (
        <Indent>
          <Recur match={match}/>
        </Indent>
      )}/>
    </Switch>
  </Container>

const Container = styled.div`
  color: coral;
`

const Indent = styled.div`
  ${Container} & {
    margin-left: 10px;
    padding-left: 10px;
    border-left: solid 1px slategrey;
  }
`


export default Recur
