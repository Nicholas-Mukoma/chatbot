import { useState } from 'react'
import Header from "./components/Header"
import Friend from './components/Friend'
import Chat from './components/Chat'



function App() {


  return (
    <div className='flex flex-col justify-center'>
     <Header />
     <Friend />
     <Chat /> 
    </div>
  )
}

export default App
