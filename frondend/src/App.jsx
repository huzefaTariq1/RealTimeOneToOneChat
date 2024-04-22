import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import Home from './pages/home/Home'
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className='p-4 h-screen flex justify-center items-center '>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<SignUp/>}/>
  </Routes>
  <Toaster/>
   </div>
    </>
  )
}

export default App
