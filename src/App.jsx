import { useState } from 'react'
import Header from "./components/Header"
import Climate from './components/Climate'
import Chat from './components/Chat'



function App() {


  return (
    <div className='flex flex-col justify-center'>
     <Header />
     <Climate />
     <Chat /> 
    </div>
  )
}

export default App
