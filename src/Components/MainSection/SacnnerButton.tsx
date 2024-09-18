import React from 'react'
import BtnDonwload from './BtnDonwload'
import ScanTrack from './ScanTrack';


type Str = {
  png: string,
  PNG1: string,
  scanTrack: string,
}

function SacnnerButton(props:any) {

  let png = "Download";
  let PNG1 = "PNG";
  
  return (
    <>
      <div className='pb-8'>
        <div className='flex justify-center'>
          <BtnDonwload isOpacity={props.isOpacity} png={png} PNG1={PNG1} />
          <BtnDonwload isOpacity={props.isOpacity} png={'Download'} PNG1={'SVG'} />
        </div>
        <ScanTrack isOpacity={props.isOpacity} scanTrack={'Track number of scans'} />
      </div>
    </>
  )
}

export default SacnnerButton