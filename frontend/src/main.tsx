import React from 'react'
import ReactDOM from 'react-dom/client'
import Routing from './navagation/routing/routing.tsx'
import './styles/index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
)
