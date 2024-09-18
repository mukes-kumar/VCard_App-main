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

type Str = {
  png: string,
  PNG1: string,
  scanTrack: string,
}


function HeroSection() {


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
    { name: "Link", link: "/link", iconName: "link", p: "pl-8 pt-4 " },
    { name: "E-mail", link: "/email", iconName: "mail" }
    , { name: "Text", link: "/text", iconName: "menu" },
    { name: "Call", link: "/call", iconName: "call" },
    { name: "SMS", link: "/sms", iconName: "mail-open" },
    { name: "V-Card", link: "/v-card", iconName: "id-card" },
    { name: "Whatsapp", link: "/whatsapp", iconName: "logo-whatsapp" },
    
    { name: "WI-FI", link: "/wi-fi", iconName: "wifi" },
    { name: "PayPall", link: "/paypall", iconName: "logo-paypal" },
    { name: "Event", link: "/event", iconName: "folder" },
    { name: "PDF", link: "/pdf", iconName: "document" },
    { name: "APP", link: "/app", iconName: "call" },
    { name: "Images", link: "/images", iconName: "images" },
    { name: "Video", link: "/video", iconName: "videocam" },
    { name: "Social Media", link: "/social-media", iconName: "share-social" },

  ];


  return (
    <>
      <div className=''>
        <div className='flex flex-col md:flex-row  lg:max-w-[1150px] md:max-w-[820px] max-w-[550px]  mx-auto shadow-md mt-28 border-2 border-gray-300'>
          <div className='flex flex-col ' style={{ backgroundColor: 'rgb(243, 247, 251)' }}>
            <div style={{ backgroundColor: '' }} className='lg:mx-9 mx-9 mt-8 flex'>
              <div className='grid grid-cols-3 gap-6 lg:grid-cols-5 shadow-lg border-[1px] lg:p-6 p-8 lg:space-x-2 space-x-8 space-y-4'>
                {
                  Links.map((link) => (
                    <div key={link.name} className={`hover:border-[1px] duration-1000 border-red-400 inline-f ${link.p}`}>
                      <ion-icon name={link.iconName}></ion-icon>
                      <Link key={link.name} to={link.link}>{link.name}</Link>
                    </div>
                  ))
                }
              </div>
            </div>
            <SubmitUrl vCardData={vCardData} onChange={handleInputChange} />
          </div>
          <ScannerHerosection isOpacity={isOpacity} vCardString={vCardString} />

        </div>
      </div>
    </>
  )
}

export default HeroSection