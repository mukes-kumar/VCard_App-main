import React from 'react'

function ScanTrack(props:any) {
  return (
    <>
      <div className='mt-8 md:ml-8 ml-12'>
        <a className={`bg-gray-800  text-white font-bold  rounded ${props.isOpacity ? 'cursor-pointer':'cursor-not-allowed'} text-center lg:px-[72px] md:px-10 px-24 py-3`}>{props.scanTrack}</a>
      </div>
    </>
  )
}

export default ScanTrack