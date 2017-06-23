// @flow
import React, { Component } from 'react'
import u from 'react-universal-component'

function createResolvedRoutes() {
  return u(props => props.from, {
    loading: () => <div>Loading...</div>,
    error: () => <div>Error!</div>,
    onLoad: (loaded) => {
      // Setup anything else from loaded module...
      // e.g. redux reducers, etc.
    }
  })
}

class Module extends Component {
  state = {
    ResolvedRoutes: null
  }

  componentWillMount() {
    this.setState({
      ResolvedRoutes: createResolvedRoutes()
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.from !== this.props.from) {
      this.setState({
        ResolvedRoutes: createResolvedRoutes()
      })
    }
  }

  render() {
    const { ResolvedRoutes } = this.state
    return ResolvedRoutes
      ? <ResolvedRoutes from={this.props.from} match={this.props.match} />
      : null
  }
}

export default Module
