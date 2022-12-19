import React from 'react'
import ReactDOM from 'react-dom/client'
import { Layout } from './05-useLayoutEffect/Layout'
import { Memorize } from './06-memos/Memorize'
import { MemoHook } from './06-memos/MemorizeHook'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <MemoHook />
  // </React.StrictMode>
)
