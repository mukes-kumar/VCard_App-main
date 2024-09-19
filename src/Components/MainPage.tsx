import React from 'react'
import NavBar from './NavBar/NavBar'
import HeroSection from './MainSection/HeroSection'
import CustomiseCard from './MainSection/CustomiseCard'
import Heading from './Companies/Heading'
import CompaniesLogo from './Companies/CompaniesLogo'
import BenefitsQR from './Companies/BenefitsQR'
import DynamicVSStaticQR from './Companies/DynamicVsStatic/DynamicVSStaticQR'
import DynamicCart from './Companies/DynamicVsStatic/DynamicCart'
import UseSection from './HowToUseSection/UseSection'
import QRGenator from './MainSection/QRGenator'
import QrGenerator from './QrGenerator'
import QuickRespose from './HowToUseSection/QuickRespose'
import QRCodeType from './HowToUseSection/QRCodeType'
import FooterSection from './Footer/FooterSection'


function MainPage() {
  const icon = [
    {link: 'FaHome'}
  ]

  const name= 'DYNAMIC';
  const DesName='Dynamic QR Codes Explains'
  const ShortName='Dynamic'

  return (
    <>
      <NavBar />
      {
        <HeroSection icon={icon}/>
      }
      <CustomiseCard />
       <CompaniesLogo />
       <BenefitsQR title={'Benefits from QR.io'}/>
       <DynamicVSStaticQR />
       <DynamicCart name={name} DesName={DesName} ShortName={ShortName}/>
       <UseSection />
       <QuickRespose />
       <QRCodeType title={'QR Code Types'}/>

       <FooterSection />
    </>
  )
}

export default MainPage