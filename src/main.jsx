import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux"
import { Store } from './redux/slice/Store.jsx'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store ={Store}>
      <App />
      <Toaster/>
    </Provider>
  </BrowserRouter>
    
  
)
