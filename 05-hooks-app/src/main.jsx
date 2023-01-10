import React from 'react'
import ReactDOM from 'react-dom/client'
import { TodoApplication } from './08-useReducer/TodoApplication'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { MainPage } from './09-useContext/MainPage'

console.log('Rendered app');

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <MainPage />
    {/* </React.StrictMode> */}
  </BrowserRouter>
)
