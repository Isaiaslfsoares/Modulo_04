import React from 'react'
import { creaeRoot } from 'react-dom/client'
import App from './src/app.js'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App/>)