import React from 'react'
import { Link } from 'react-router-dom'
import { ImLinkedin } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

function FooterSection() {
  return (
    <>
      <footer className="bg-[#f3f7fa] py-4">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 grid-rows-2">
            <div className=' space-y-4'>
              <div className="">
                <Link to="/login" className="font-bold text-lg ">
                  <img src='https://qr.io/logo/logo-title.png' className='w-[103px]  ' alt='Logo dark' />
                  <img src='https://qr.io/logo/logo-title-white.png' alt="Logo Light" className='w-[103px]' />
                </Link>
                <p className='font-sans text-[18px] md:text-[20px] text-[#66799e] mb-[3px]'>Generate fully customized QR Codes, with color & shape, logo and keep track of how many people scan your QR Codes, from where and on what date.</p>
              </div>
              <div>
                <h3 className="font-serif text-[21px]  md:text-[24px] text-[#2a354f] font-semibold">Follow Us</h3>
                <ul className="flex ">
                  <li ><a href="#" className='flex gap-4 text-[#2a354f] '>
                    <span className='text-[28px]'> <FaFacebook />
                    </span>
                    <span className='text-[28px]'>
                      <FaSquareXTwitter />
                    </span>
                    <span className='text-[28px]'>
                      <ImLinkedin />
                    </span>
                  </a></li>

                </ul>
              </div>
            </div>
            <div className='grid grid-cols-2 mb-6'>
              <div className="mb-4 sm:mb-0">
                <h3 className="font-serif text-[21px]  md:text-[24px] text-[#2a354f] font-semibold mb-[8px]">Product</h3>
                <ul className='grid space-y-2 text-[#66799e] text-[19px]  md:text-[21px'>
                  <li><a href="#">QR Code Types</a></li>
                  <li><a href="#">Dynamic QR Codes</a></li>
                  <li><a href="#">Static QR Codes</a></li>
                  <li><a href="#">Features</a></li>
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">API</a></li>
                  <li><a href="#">Affiliate Program</a></li>
                </ul>
              </div>
              <div className="mb-4 sm:mb-0">
                <h3 className="font-serif text-[21px]  md:text-[24px] text-[#2a354f] font-semibold mb-[3px]">Use Cases</h3>
                <ul className='grid  text-[#66799e] text-[19px]  md:text-[21px space-y-3'>
                  <li><a href="#">Weddings</a></li>
                </ul>
              </div>
            </div>
            <div className='grid grid-cols-2 space-x-10'>
              <div className="mb-4 sm:mb-0">
                <h3 className="font-serif text-[21px]  md:text-[24px] text-[#2a354f] font-semibold mb-[9px]">Help</h3>
                <ul className='grid  text-[#66799e] text-[19px]  md:text-[21px] space-y-2'>
                  <li><a href="#">Help Center</a></li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Changelog</a></li>
                  <li><a href="#">Status</a></li>
                  <li><a href="#">Cancel Subscription</a></li>
                </ul>
              </div>
              <div className="mb-4 sm:mb-0">
                <h3 className="font-serif text-[21px]  md:text-[24px] text-[#2a354f] font-semibold mb-[3px]">Company Cases</h3>
                <ul className='grid  text-[#66799e] text-[19px]  md:text-[21px] space-y-2'>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Terms of Service</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Disclaimer</a></li>
                  <li><a href="#">Refund Policy</a></li>
                </ul>
              </div>
            </div>

          </div>
          <div className="mt-8 text-center flex flex-wrap justify-between">
            <p className='text-[#66799e] font-sans '>© QR.io 2024. All rights reserved. QR Code is a registered trademark of DENSO WAVE INCORPORATED</p>

            <div className=''>
              <select className="ml-64 mt-3 lg:ml-20 lg:mt-0 appearance-none bg-slate-200 text-gr md:bg-[#66799e] border border-[#66799e] rounded-md px-4 py-3 md:text-[#fff] focus:outline-none focus:ring-2 md:focus:ring-white md:hover:bg-white hover:text-gray-600 ">
                <option value="">English</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default FooterSection