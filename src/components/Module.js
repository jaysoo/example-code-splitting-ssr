// @flow
import React, { Component } from 'react'
import u from 'react-universal-component'

/*
 * This component's purpose is to resolve a lazily loaded component,
 * as well as handle any extra initialization logic. e.g. setting up redux store.
 */

class Module extends Component {
  state = {
    LazyRoute: null
  }

  componentWillMount() {
    this.setState({
      LazyRoute: createLazyRoute()
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loader !== this.props.loader) {
      this.setState({
        LazyRoute: createLazyRoute()
      })
    }
  }

  render() {
    const { LazyRoute } = this.state
    return LazyRoute
      ? <LazyRoute loader={this.props.loader} match={this.props.match} />
      : null
  }
}

function createLazyRoute() {
  return u(props => props.loader, {
    loading: () => <div>Loading...</div>,
    error: () => <div>Error!</div>,
    onLoad: (loaded) => {
      // Setup anything else from loaded module...
      // e.g. redux store, etc.
    }
  })
}

export default Module
