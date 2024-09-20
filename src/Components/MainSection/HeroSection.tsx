import React from 'react'
import SubmitUrl from './SubmitUrl';
import ScannerHerosection from './ScannerHerosection';
import UrlForm from './UrlForm';
import SacnnerButton from './SacnnerButton'
import { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import vCardJS from 'vcards-js'; // Import the 'vcards-js' library
import BtnDonwload from './BtnDonwload';
import ScanTrack from './ScanTrack';
import { Link } from 'react-router-dom';


import { IoMdMenu } from "react-icons/io";
import { FaLink } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaSms } from "react-icons/fa";
import { BsPersonVcard } from "react-icons/bs";
import { MdWhatsapp } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { GrPaypal } from "react-icons/gr";
import { BsCalendarEventFill } from "react-icons/bs";
import { FaFilePdf } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaImages } from "react-icons/fa";
import { RiVideoFill } from "react-icons/ri";
import { IoShareSocialSharp } from "react-icons/io5";
import { BiSolidPlusSquare } from "react-icons/bi";
import { Icons } from 'react-toastify';


type Str = {
  png: string,
  PNG1: string,
  scanTrack: string,
}


function HeroSection({ icon }: any) {



  // scannerButton
  let png = "Download";
  let PNG1 = "PNG";

  const [isOpacity, setIsOpacity] = useState(false);

  const [vCardData, setVCardData] = useState({
    firstName: '',
    url: ''
  });

  const [vCardString, setVCardString] = useState('');

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setVCardData({ ...vCardData, [name]: value });
  // };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setVCardData({ ...vCardData, [name]: value });
    if (isOpacity === false) {
      setIsOpacity(true);
    } else {
      setIsOpacity(false);
    }
  };

  useEffect(() => {
    const myVCard = vCardJS(); // Create a vCard object using 'vcards-js'

    myVCard.firstName = vCardData.firstName;

    myVCard.url = vCardData.url;

    const formattedString = myVCard.getFormattedString();
    setVCardString(formattedString);
  }, [vCardData]);


  const Links = [
    {
      contact: [
        {
          name: "Link",
          link: "/link",
          p: "pl-4 pt-5 ",
          icons: FaLink
        },
        {
          name: "E-mail",
          link: "/email",
          icons: MdEmail
        },
        {
          name: "Text",
          link: "/text",
          icons: IoMdMenu
        },
        {
          name: "Call",
          link: "/call",
          icons: BiSolidPhoneCall
        },
        {
          name: "SMS",
          link: "/sms",
          icons: FaSms
        },
        {
          name: "V-Card",
          link: "/v-card",
          icons: BsPersonVcard
        },
        {
          name: "Whatsapp",
          link: "/whatsapp",
          icons: MdWhatsapp
        },
        {
          name: "WI-FI",
          link: "/wi-fi",
          icons: FaWifi
        },
        {
          name: "PayPall",
          link: "/paypall",
          icons: GrPaypal
        },
        {
          name: "Event",
          link: "/event",
          icons: BsCalendarEventFill
        },
        {
          name: "PDF",
          link: "/pdf",
          icons: FaFilePdf
        },
        {
          name: "APP",
          link: "/app",
          icons: FaMobileAlt
        },
        {
          name: "Images",
          link: "/images",
          icons: FaImages
        },
        {
          name: "Video",
          link: "/video",
          icons: RiVideoFill
        },
        {
          name: "Social Media",
          link: "/social-media",
          icons: IoShareSocialSharp,
        }

      ]
    }
  ];


  return (
    <>
      
        <div className='flex flex-col xl:flex-row lg:max-w-[900px]  xl:max-w-[1200px] md:max-w-[850px]  max-w-[390px]  mx-auto shadow-md mt-36 border-2 border-gray-300 rounded-md m-0'>
          <div className='flex flex-col justify-around' style={{ backgroundColor: 'rgb(243, 247, 251)' }}>
            <div style={{ backgroundColor: '' }} className='lg:mx-9 mx-9 mt-10 '>
              <div className='grid grid-cols-3 gap-6 lg:grid-cols-5 shadow-lg border-[1px] lg:p-6 pr-6 lg:space-x-2 space-x-8 space-y-6 pb-7 '>

                {
                  Links.map((e, i) => {
                    return (
                      <>
                        {
                          e.contact.map((e, i) => {
                            return (
                              <div key={e.name} className={`hover:border-[1px] duration-1000 border-red-400 inline-flex ${e.p} space-x-1  flex text-[#2a354f]`}>
                                 <span className={`mt-2 text-[15px] md:text-[18px] `} ><e.icons /></span>
                                <Link to={e.link} className='text-[15px] md:text-[18px]'>{e.name}
                                </Link>
                              </div>
                            );
                          })
                        }
                      </>
                    );
                  })

                }
              </div>
            </div>
            <SubmitUrl vCardData={vCardData} onChange={handleInputChange} />
          </div>
          <ScannerHerosection isOpacity={isOpacity} vCardString={vCardString} />

        </div>
      
    </>
  )
}

export default HeroSection