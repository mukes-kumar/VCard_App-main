import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

function BenefitsBelow() {

  const benifitsItem = [
    { name: 'Dynamic QR Codes',
      id:1
     },
    {
      name: 'Static QR Codes', 
      id:2
    },
    {
      name: 'QR Code Statistics',
      id:3

    },
    {
      name: 'Fully customized landing pages',
      id:4
    },
    {
      name: 'Customized Colors & Shapes for QR Codes',
      id:5
    },
    {
      name: 'No Coding Required',
      id:6
    }
  ];

  return (
    <>
      <ul className='opacity-[0.7] mb-[24px] flex flex-col pl-0 border-[0.5px] lg:w-[920px] sm:w-[470px] md:w-[600px] w-[430px] rounded-xl'>
        {
          benifitsItem.map((item) => (
            <li key={item.id} className=' flex items-center p-5 bg-[#ffff] border-[1px] border-solid border-[#e9ecef] relative'>
              <i className='text-green-700 mr-2'><FaCheckCircle /></i>{item.name}
            </li>
          ))

        }

      </ul>
    </>
  )
}

export default BenefitsBelow