import React from 'react'
import BenefitsBelow from './BenefitsBelow'
import ScanMePic from './ScanMePic'

function BenefitsQR(props: any) {
  return (
     <>
       <div className={` mt-8 ${props.mt}`}>
          <div className='flex flex-wrap items-center'>
             <div className='ml-8 md:ml-20 space-y-8'>
                <h2 className='font-semibold mb-[24px] font-serif text-3xl md:text-4xl text-gray-700'>{props.title}
                </h2>
                <p className='text-[17px] text-teal-700'>By using QR.io you will be able keep track of how many people scan your {props.title}, from where and on what date.</p>

                <p className='text-[17px] text-teal-700'>Also for those non-developers you can create fully customized landing pages for your {props.title}. No Coding Required!</p>

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