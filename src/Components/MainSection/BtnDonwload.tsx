import React from 'react'


function BtnDonwload(props: any) {
  return (
    <>
      <div className='mt-2 flex mx-3'>
        <div className='flex'>
          <a className={`bg-blue-500 w-auto text-white font-bold py-3 px-8 sm:text-sm text-lg lg:px-8 rounded  ${props.isOpacity ? 'cursor-pointer':'cursor-not-allowed'} text-center md:py-4 md:px-4`}>
            <span>
              <ion-icon name="cloud-download"></ion-icon>
              {props.png}<br />
              {props.PNG1}
            </span>
          </a>
        </div>
      </div>
    </>
  )
}

export default BtnDonwload