import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Testing from './Testing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter basename='/testing-vite-deploy/'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tes' element={<Testing />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
