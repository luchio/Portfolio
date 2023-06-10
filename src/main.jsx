import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppPorfolio } from './AppPorfolio'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppPorfolio />
    </BrowserRouter>
  </React.StrictMode>,
)
