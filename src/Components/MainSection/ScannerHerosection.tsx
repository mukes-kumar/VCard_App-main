import React from 'react'
import SacnnerButton from './SacnnerButton'
import { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import vCardJS from 'vcards-js'; // Import the 'vcards-js' library

// import '../QrGenerator.css'; // Create a CSS file for styling
function ScannerHerosection(props:any) {


  return (
    <>

      <div className='h-auto order-3 lg:order-2 md:border-l-[1px] border-gray-300 flex justify-center'>
        <div className='ml-10  h-auto order-3 lg:order-2 md:border-l-1 border-gray-300 flex justify-center'>
          <div className={`${props.isOpacity ? 'opacity-[1]' : 'opacity-[0.3]'} max-w-[500]`}>
            <div className='flex justify-center items-center m-8 lg:ml-8 border-2 border-gray-400  p-3'>

              <div className="qr-generator-container ">
                <div className="input-fields">


                </div>
                <div className="qr-code">
                  <QRCode value={props.vCardString} size={250} level={"H"}
                  />
                </div>
              </div>
            </div>
            <div>

              <SacnnerButton isOpacity={props.isOpacity} />


            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default ScannerHerosection