import React from 'react'

function DynamicVSStaticQR() {
  return (
    <>
       <div className='relative pb-[14rem] bg-[#f3f7fa]'>
         <div className='container w-[100%] pr-[15px] pl-[15px] mr-auto ml-auto '>
             <div className='flex flex-wrap flex-col  justify-center text-center'>
                <div className='text-[#2a354f] items-center mt-16 mb-8'>
                   <h2 className='text-[#2a354f] font-sans mt-[2rem] md:text-4xl text-3xl md:text-md space-x-3'>
                   <strong style={{color: "rgb(21, 169, 124)"}}>Dynamic</strong> vs
                   <strong className='' style={{color: "rgb(21, 169, 124)"}}>Static</strong> QR Codes
                   </h2>
                   
                </div>
                <p className='text-[#66799e] mb-[1.5rem] md:text[15px] text-[px] font-sans ml-4'>The outcome of both are pretty similar. They have their differences when it comes to changes, updates, stats, track.</p>
             </div>
         </div>
       </div>
    </>
  )
}

export default DynamicVSStaticQR