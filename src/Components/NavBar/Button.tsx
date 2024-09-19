import React, { useState } from 'react'
import { FaLink, FaUserPlus } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'


function Button() {
  return (
    <>
      <div className={`flex space-x-4 mt-3 md:ml-20 lg:ml-44 ml-36`}>
        
        <div className={`hidden md:flex px-3 py-[3px] justify-center items-center bg-yellow-500 text-black rounded font-bold text-md absolute md:right-6 right-8 top-4 cursor-pointer $`}>
        <FaArrowRight />
          <Link to="/log In" className=''>Log In</Link>
        </div>

        <div className={`flex justify-center items-center py-[2px] bg-blue-600 text-white rounded font-bold cursor-pointer sm:px-2  px-4 text-md absolute md:right-32 right-36 top-4`}>
        <FaUserPlus />
          <Link to="/signup" className='text-center'>Sign Up</Link>
        </div>
      </div>
    </>
  )
}

export default Button