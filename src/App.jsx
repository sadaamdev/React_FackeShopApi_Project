import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from'./Components/Home.jsx'
import Products from './Pages/Products'
import Header from './Components/Header.jsx'
export default function App() {
  return (
    <div>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='products' element={<Products/>}/>
     </Routes>
    </div>
  )
}
