import React from 'react'
import Heading from './Heading'
import Marquee from "react-fast-marquee";

function companiesLogo() {
  return (
    <div>
      <div>
        <Heading />
      </div>
      <div>
        <Marquee>
          <div className='mt-12 mb-12'>
            <ul className='flex justify-around space-x-28'>

            <li className=''><img src="https://qr.io/trusted-by-logos/dhl.png" alt='not' className='max-w-[100px]' /></li>

              <li><img src='https://qr.io/trusted-by-logos/loreal.png' className='max-w-[100px] ' /></li>

              <li><img src="https://qr.io/trusted-by-logos/samsung.png" className='max-w-[100px]' /></li>

              <li><img src="https://qr.io/trusted-by-logos/ford.png" className='max-w-[100px]' /></li>


              <li><img src="https://qr.io/trusted-by-logos/mastercard.png" className='max-w-[100px]' /></li>

              <li><img src="https://qr.io/trusted-by-logos/amazon.png" className='max-w-[100px]' /></li>

              <li><img src="https://qr.io/trusted-by-logos/spotify.png" className='max-w-[100px]' /></li>

              <li><img src="https://qr.io/trusted-by-logos/nike.png" className='max-w-[100px]' /></li>

              <li><img src="https://qr.io/trusted-by-logos/disney.png" className='max-w-[100px]' /></li>

              <li><img src="https://qr.io/trusted-by-logos/pepsi.png" className='max-w-[100px]' /></li>

              <li><img src="https://qr.io/trusted-by-logos/jpmorgan.png" className='max-w-[100px]' /></li>

              <li><img src="https://qr.io/trusted-by-logos/lamborghini.png" className='max-w-[100px]' /></li>

              <li><img src="https://qr.io/trusted-by-logos/louis-vuitton.png" className='max-w-[100px]' /></li>

              <li><img src="https://qr.io/trusted-by-logos/walmart.png" className='max-w-[100px]' /></li>

              <li><img src="https://qr.io/trusted-by-logos/tesla.png" className='max-w-[100px]' /></li>

              <li><img src="https://qr.io/trusted-by-logos/bloomingdales.png" className='max-w-[100px]' /></li>

              <li><img src="https://qr.io/trusted-by-logos/fedex.png" className='max-w-[100px]' /></li>

              <li><img src="https://qr.io/trusted-by-logos/porsche.png" className='max-w-[100px]' /></li>

              <li><img src="https://qr.io/trusted-by-logos/paypal.png" className='max-w-[100px]' /></li>

            </ul>
          </div>
        </Marquee>
      </div>
    </div>
  )
}

export default companiesLogo