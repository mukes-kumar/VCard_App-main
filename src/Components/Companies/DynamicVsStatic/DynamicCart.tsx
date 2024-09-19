import shadows from '@mui/material/styles/shadows'
import React from 'react'
import StaticCart from './StaticCart'
import { Link } from 'react-router-dom'



type cart = {
  name: string,
  DesName: string,
  ShortName: string
}

function DynamicCart({name, DesName, ShortName}: cart) {

  const staticN= 'STATIC';
  const DesStatic='Static QR Codes Explained'
  const ShortStaticN='Static'


  return (
    <>
      <div className='pb-0 pt-0 '>
        <div className='container w-[100%] md:pl-[30px] pr-[40px] mr-auto ml-auto'>
          <div className='mt-[-12rem] flex flex-wrap'>
            <div className='mb-[3rem] flex'>
              <Link to="/dynamic" className='hover:mt-[-5px] delay-300 relative transition-all shadow-lg shadow-transparent flex flex-col min-w-0 bg-[#fff]  '>
                <div className=' pb-[3rem] px-[2rem] pt-[1.5rem]'>
                  <span className="text-center px-2 py-[2px] rounded-xl text-sm	 text-[#fff] bg-[#005ad4]">{name}</span>
                  <div>
                    <img src='https://qr.io/assets/img/dynamic.png' className="block ml-auto mr-auto max-w-[100%] h-auto border-none" alt='Not visible' />
                  </div>
                  <h5 className='mb-[1rem] font-semibold text-2xl text-[#2a354f] mt-0 '>{DesName}</h5>

                  <p className='text-[#66799e] mb-0 font-sans text-[1.2rem] font-light'>
                    With {ShortName} Qr Codes you can create a customized landing page for your QR Code that can be changed and updated whenever you want no matter if the QR Code is created or even if it went public.
                    <br />
                    <br />
                    {ShortName} Qr Codes also give you statistics of how many people scanned your QR Codes, from where and on what date.
                    <br />
                    <br />
                    This QR Code type is most used by business owners (restaurants, gyms, clothing stores, etc.), artists, influencers, and non-developers users.
                  </p>
                </div>
              </Link>
            </div>
            <div>
              <StaticCart staticN={staticN} DesStatic={DesStatic} ShortStaticN={ShortStaticN}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DynamicCart