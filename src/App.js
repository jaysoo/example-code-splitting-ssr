import React from 'react'
import styled from 'styled-components'
import { NavLink, Route, Switch } from 'react-router-dom'
import { Layout, Main, Module, Sidebar } from './components'

const App = ({ className }) =>
  <Layout className={className}>
    <Sidebar>
      <h3>Navigation</h3>
      <ul>
        <li>
          <StyledNavLink exact to="/">
            Home page
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/about">
            About page
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/deep">
            Deep nesting example
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/recur">
            Recursive example
          </StyledNavLink>
        </li>
      </ul>
      <p>
        <a href="https://github.com/jaysoo/example-code-splitting-ssr">
          GitHub repo
        </a>
      </p>
    </Sidebar>
    <Main>
      <Switch>
        <Route
          exact
          path="/"
          render={({ match }) =>
            <Module {...this.props} match={match} from={import('./modules/home')} />}
        />
        <Route
          path="/about"
          render={({ match }) =>
            <Module {...this.props} match={match} from={import('./modules/about')} />}
        />
        <Route
          path="/deep"
          render={({ match }) =>
            <Module {...this.props} match={match} from={import('./modules/deep')} />}
        />
        <Route
          path="/recur"
          render={({ match }) =>
            <Module {...this.props} match={match} from={import('./modules/recur')} />}
        />
      </Switch>
    </Main>
  </Layout>

const StyledNavLink = styled(NavLink)`
  &.active {
    text-decoration: none;
    color: black;
    pointer-event: none;
  }
`

export default styled(App)`
  font-family: Comic Sans MS;
  
  * {
    box-sizing: border-box;
  }
  
  div {
    margin: 0;
  }
  
  a {
    color: slategrey;
  }
  
  a:hover {
    color: lightslategrey;
    text-decoration: none;
  }
`
