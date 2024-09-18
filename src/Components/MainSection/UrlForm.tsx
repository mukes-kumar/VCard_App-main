import React from 'react'
import { WiCloudDown } from "react-icons/wi";

function UrlForm() {
  return (
    <>
        <div className='order-2 lg:order-3 mt-5 w-full pb-4'>
          <div className='text-xl flex flex-col '>

            <div className=''>
              <input type='text' className='text-gray-600 md:max-w-96 lg:max-w-[610px] mx-auto text-lg rounded-t-lg border-[2px] border-gray-200 py-4 duration-500 outline-none' required readOnly/>
              
              
            </div>
            <div className='mt-7'>
              <input type='text' className='text-gray-700 md:max-w-96 lg:max-w-[610px] mx-auto text-lg  border-[2px] border-gray-200  py-4 duration-500 ' required />
              
            </div>
            <div className='mt-7'>
              <input type='text' className='text-gray-700 md:max-w-96 lg:max-w-[610px] mx-auto text-lg rounded-b-lg border-[2px] border-gray-300  py-4 duration-500 ' required />
             
              
            </div>
           
          </div>
        </div>
    </>
  )
}

export default UrlForm