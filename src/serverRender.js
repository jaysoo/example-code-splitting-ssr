import React from 'React'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { flushChunkNames } from 'react-universal-component/server'
import flushChunks from 'webpack-flush-chunks'
import App from './App'

const ssr = stats => (req, res) => {
  const context = {}
  const html = ReactDOMServer.renderToString(
    React.createElement(
      StaticRouter,
      {
        location: req.url,
        context: context
      },
      React.createElement(App, {})
    )
  )
  const chunkNames = flushChunkNames()
  const { js } = flushChunks(stats, {
    chunkNames: chunkNames
  })
  res.send(
    `<!doctype html>
    <html>
      <head>
        <title>Demo</title>
      </head>
      <body>
        <div id="root">${html}</div>
        ${js}
      </body>
    </html>
  `)
}

export default ssr
