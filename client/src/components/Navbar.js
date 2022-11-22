import React from 'react'
import logo from '../assets/gamaforce.png'

const Navbar = () => {
  return (
    <div className='flex justify-center py-3 bg-color3 align-middle'>
        <p className='text-white font-sans italic font-bold text-4xl mx-1'>GAMAFORCE GCS</p>
        <img class='h-10 ml-2' src= {logo} />
    </div>
  )
}

export default Navbar