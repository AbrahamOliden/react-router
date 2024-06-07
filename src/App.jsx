import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './routes/Home.jsx'
import About from './routes/About.jsx'
import './assets/css/base/base.css'
import './assets/css/componentes/card.css'
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
