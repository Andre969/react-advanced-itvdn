import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './src/App'
import serverTemplate from './serverTemplate'

const app = express()

app.get('/', (req, res) => {
	const appString = renderToString(<App/>)
	res.send(serverTemplate(appString))
})

app.use('/assets', express.static('src/assets'))
app.use('/dist', express.static('dist'))

const port = 8081
app.listen(port)
console.log(`http://localhost:${port}`)