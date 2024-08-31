import { useState } from 'react'
import { Routes , Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Card from './pages/Card'
import './App.css'

function App() {

  return (
    <div>
      <div className="bg-slate-900">
        <Navbar/>
      </div>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/card" element={<Card/>}/>
      </Routes>
    </div>
  )
}

export default App
