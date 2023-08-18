import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, BrowserRouter } from "react-router-dom"
// import App from './App.tsx'
import MenuLateral from './components/MenuLateral/index.tsx'
import './index.css'
import Header from './components/Header/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
    <MenuLateral />
    <Header/>
    
  </React.StrictMode>,
)
