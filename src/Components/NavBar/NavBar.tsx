import React, { useState } from 'react'
import Button from './Button';
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

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
  ];

  let [open, setOpen] = useState(false);

  const ClickCruss = () =>{
     if(open===false){
        setOpen(true);
     }else{
      setOpen (false);
     }
  } 
  return (
    <>
      <nav className="w-full fixed top-0 left-0 pb-6 flex shadow-md pl-10 z-10 items-center bg-white">
        <div className='flex'>
          <Link to="/login" className="font-bold text-lg ">
            <img src='https://qr.io/logo/logo-title-white.png' alt="Logo Light" className='w-[103px] h-6 ml-6' />
            <img src='https://qr.io/logo/logo-title.png' className='w-[103px] h-7 ' alt='Logo dark' />
          </Link>
        </div>
        <div onClick={ClickCruss} className='text-3xl absolute right-20 sm:right-16 md:top-6 top-4  cursor-pointer md:hidden'>
        <IoMenu  className={`${open === false ? 'show' : 'hidden'}`}/>
        <IoCloseSharp  className={` ${open === false ? 'hidden' : 'show'}`}/>


          {/* <ion-icon name={open ? 'close-outline':'menu-outline'}></ion-icon> */}
        </div>
        <ul className={`md:flex w-full lg:space-x-10 space-x-2 md:space-x-4 mt-3 md:px-6 px-10 ${open === false ? 'hidden' : 'top-[60px]'} absolute md:static bg-white w-full md:w-auto`}>
          {
            Links.map((link) => (
              <li key={link.name} className='text-lg lg:text-xl md:text-[18px]'>
                <a href={link.link} className='text-[#66799e] hover:text-gray-400 duration-300'>{link.name}

                </a>
              </li>
            ))
          }

        </ul>
        <Button/>
      </nav>
    </>
  )
}

export default NavBar