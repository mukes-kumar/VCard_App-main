import React from 'react'

// import mobileIcon from './assets/mobile-icon.jpg';
import { FaAddressCard } from "react-icons/fa";
import { IoBarChartSharp } from "react-icons/io5";
import { IoIosColorPalette, IoLogoBuffer } from "react-icons/io";

function CustomiseCard() {
  const productName = [
    { name: "Customized Mobile Pages", icon:  FaAddressCard},
    { name: "Track QR Codes", icon:  IoBarChartSharp},
    { name: "Choose Color & Shape", icon:  IoIosColorPalette},
    { name: "Add Logos to QR Codes", icon: IoLogoBuffer },
  ];

  return (
    <>

      <div className='m-24'>
        <div className="max-w-[950px] md:max-w-[850px] lg:max-w-[1060px] mx-auto bg-white flex md:flex-row flex-col  shadow-xl border-[1px] sm:mt-24">
          {
            productName.map((name) => (
              <div key={name.name} className="p-9 shadow-sm  flex  justify-around items-center space-y-10 ">
                <div className='items-center '>
                  <div className='flex items-center justify-center'>
                    <span className='text-green-800 text-[25px]'>
                       <name.icon />
                    </span>
                  </div>
                  <h5 className="mb-2 text-lg  tracking-tight text-gray-700">{name.name}</h5>
                </div>
              </div>
            ))
          }

        </div>
      </div>
    </>
  )
}

export default CustomiseCard