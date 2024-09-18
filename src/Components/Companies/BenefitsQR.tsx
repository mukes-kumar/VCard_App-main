import React from 'react'
import BenefitsBelow from './BenefitsBelow'
import ScanMePic from './ScanMePic'

function BenefitsQR() {
  return (
     <>
       <div className='container mt-8'>
          <div className='flex flex-wrap   items-center row-auto'>
             <div className='ml-8 md:ml-20 space-y-8'>
                <h2 className='font-semibold mb-[24px] font-serif text-4xl text-gray-700'>Benefits from QR.io
                </h2>
                <p className='text-[17px] text-teal-700'>By using QR.io you will be able keep track of how many people scan your QR Codes, from where and on what date.</p>

                <p className='text-[17px] text-teal-700'>Also for those non-developers you can create fully customized landing pages for your QR Codes. No Coding Required!</p>

                <BenefitsBelow />
             </div>
             <div>
                <ScanMePic />
             </div>

          </div>
       </div>
     </>
  )
}

export default BenefitsQR