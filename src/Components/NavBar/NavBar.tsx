import React, { useState } from 'react'
import Button from './Button';
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";

function NavBar() {

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  let Links = [
    { name: "QR Code", link: "/QR-Code" },
    { name: "FAQ", link: "/faq" },
    { name: "Why Us?", link: "/why-us" },
    { name: "Product", link: "/product" },
    { name: "API", link: "/api" },
    { name: "Blog", link: "/blog" },
    { login: "Login", link: "/log In" },
    { login: "Dashboard", link: "/dashboard" },

  ];

  let [open, setOpen] = useState(false);

  const ClickCruss = () => {
    if (open === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }
  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 pb-6 flex shadow-md  z-10 items-center bg-white ${open === false ? '' : 'pb-8'}`}>
        <div className={`flex pl-[35px] md:pl-[80px]`}>
          <Link to="/login" className="font-bold text-lg ">
            <img src='https://qr.io/logo/logo-title-white.png' alt="Logo Light" className={`w-[103px] h-6 ml-[24px]${open === false ? 'h-6' : 'p-4'} `} />
            <img src='https://qr.io/logo/logo-title.png' className={`max-w-[140px] h-6 ml-[24px]`} />
          </Link>
        </div>
        <div onClick={ClickCruss} className='text-3xl absolute right-8 sm:right-16 md:top-6 top-4  cursor-pointer md:hidden'>
          <IoMenu className={`${open === false ? 'show' : 'hidden'}`} />
          <IoCloseSharp className={` ${open === false ? 'hidden' : 'show'}`} />


          {/* <ion-icon name={open ? 'close-outline':'menu-outline'}></ion-icon> */}
        </div>
        <ul className={`md:flex w-full lg:space-x-10 space-x-2 md:space-x-4 mt-3 md:px-6 px-10 ${open === false ? 'hidden' : 'top-[70px]'} absolute md:static bg-white w-full md:w-auto ml-2 md:ml-8`}>
          {
            Links.map((link) => (
              <>
                <li key={link.name} className='text-lg lg:text-xl md:text-[18px]'>
                  <a href={link.link} className='text-[#66799e] hover:text-gray-400 duration-300 grid space-y-4'>{link.name}

                    {
                      link.login === 'Dashboard' && <button className={`md:hidden flex mt-3 items-center justify-center bg-blue-600 px-6 rounded-md text-white font-bold ${link.login === 'Dashboard' ? 'show' : 'hidden'}`}>
                        <MdOutlineDashboardCustomize />
                        {link.login}
                        {/* <LoginButton /> */}
                      </button>
                    }

                    {
                      link.login === 'Login' && <button className={`md:hidden flex mt-3 items-center justify-center bg-blue-600 px-6 rounded-md text-white font-bold ${link.login === 'Login' ? 'show' : 'hidden'}`}>
                        <FaArrowRight />
                        {link.login}
                        {/* <LoginButton /> */}
                      </button>
                    }
                  </a>

                </li>

              </>
            ))
          }

        </ul>
        <Button open={open} />
      </nav>
    </>
  )
}

export default NavBar