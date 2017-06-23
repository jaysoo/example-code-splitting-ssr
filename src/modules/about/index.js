import React from 'react'
import styled from 'styled-components'
import { Link, Route, Switch } from 'react-router-dom'
import SectionA from './SectionA'
import SectionB from './SectionB'

const About = ({ match }) =>
  <Container>
    <h1>About</h1>
    <p>This is the about section.</p>
    <p>It's a pretty boring page, but you can choose one of the following sub-sections.</p>
    <ul>
      <li>
        <Link to={`${match.url}/a`}>
          Section A
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/b`}>
          Section B
        </Link>
      </li>
    </ul>
    <hr/>
    <Switch>
      <Route path={`${match.url}/a`} component={SectionA} />
      <Route path={`${match.url}/b`} component={SectionB} />
      <Route component={Empty}/>
    </Switch>
  </Container>

const Empty = () =>
  <EmptyContainer>
    ¯\_(ツ)_/¯
  </EmptyContainer>

const EmptyContainer = styled.div`
  text-align: center;
  font-size: 36px;
  margin: 10px 0;
`

const Container = styled.div`
  color: steelblue;
`

export default About
