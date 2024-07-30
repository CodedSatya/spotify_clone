import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import PhoneSignUp from './Pages/registerPages/PhoneSignUp.jsx'
import HomePage from './Pages/HomePage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<HomePage />}/>
          <Route path='login' element={<Login />}/>
          <Route path='register' element={<Register />}/>
          <Route path='register/phoneLogin' element={<PhoneSignUp />}/>
          
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
