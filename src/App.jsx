import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='font-primary'>
      <Navbar/>

     <div className='min-h-screen'>
       <Outlet/>
     </div>


      <Footer/>

    </div>
  )
}

export default App