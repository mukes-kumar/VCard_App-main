import React from 'react'
import { Link } from 'react-router-dom'
// import img1 from '.../Image1/static.png';



type cart = {
  staticN: string,
  DesStatic: string,
  ShortStaticN: string
}


function StaticCart({staticN, DesStatic , ShortStaticN} : cart) {
  return (
    <>
      <div className='flex max-w-[100%] relative'>
        <Link to='/static' className='hover:mt-[-4px] delay-200 relative transition-all shadow-sm border border-[#f3f7fa] flex flex-col bg-[#fff] '>
          <div className='pl-[32px] pb-[48px] px-[17px] md:px-[32px] pt-[24px] block'>
            <span className="text-center px-2 py-[2px] rounded-xl text-sm	 text-[#fff] bg-[rgb(0,90,212)]">{staticN}</span>
            <div>
              <img src='https://qr.io/assets/img/static.png' className="block ml-auto mr-auto max-w-[100%] h-auto border-none" alt='Not visible' />
            </div>
            <h5 className='text-2xl mb-[16px] font-semibold  text-[#2a354f] mt-7'>{DesStatic}</h5>

            <p className='text-[#66799e] mb-0 font-sans text-[20px] font-light'>
              With {ShortStaticN} Qr Codes you can create a customized landing page for your QR Code that can be changed and updated whenever you want no matter if the QR Code is created or even if it went public.
              <br />
              <br />
              {ShortStaticN} Qr Codes also give you statistics of how many people scanned your QR Codes, from where and on what date.
              <br />
              <br />
              This QR Code type is most used by business owners (restaurants, gyms, clothing stores, etc.), artists, influencers, and non-developers users.
            </p>
          </div>
        </Link>
      </div>
    </>
  )
}

export default StaticCart