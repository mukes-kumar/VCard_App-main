import Signup from './Signup'
import { AuthProvider } from '../contexts/AuthContext'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'
import PrivateRoutes from './PrivateRoutes'
import ForgotPassword from './ForgotPassword'
import UpdateProfile from './UpdateProfile'
import Projects from './Projects'
import { ToastProvider } from '../contexts/ToastContext'
import { ApiProvider } from '../contexts/ApiContext'
import 'react-toastify/dist/ReactToastify.min.css'
import AppContextProviders from '../contexts/AppContextProvider'


import NavBar from './NavBar/NavBar'
import MainPage from './MainPage'
import LinkMain from './MainSection/AllLinks/LinkMain'
import EmailMain from './MainSection/AllLinks/EmailMain'
import TextMain from './MainSection/AllLinks/TextMain'
import CallMain from './MainSection/AllLinks/CallMain'
import SmsMain from './MainSection/AllLinks/SmsMain'
import VcardMain from './MainSection/AllLinks/VcardMain'
import WhasappMain from './MainSection/AllLinks/WhasappMain'
import WiFiMain from './MainSection/AllLinks/WiFiMain'
import PaypallMain from './MainSection/AllLinks/PaypallMain'
import EventMain from './MainSection/AllLinks/EventMain'
import PdfMain from './MainSection/AllLinks/PdfMain'
import AppMain from './MainSection/AllLinks/AppMain'
import ImagesMain from './MainSection/AllLinks/ImagesMain'
import VideoMain from './MainSection/AllLinks/VideoMain'
import SocialMediaMain from './MainSection/AllLinks/SocialMediaMain'
import DynamicCart from './Companies/DynamicVsStatic/DynamicCart'
import BenefitsQR from './Companies/BenefitsQR'
import QRCodeType from './HowToUseSection/QRCodeType'




function App() {

  const name = 'DYNAMIC';
  const DesName = 'Dynamic QR Codes Explains'
  const ShortName = 'Dynamic'

  const providers = [ToastProvider, AuthProvider, ApiProvider]
  return (
    <Router>
      <AppContextProviders components={providers}>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Dashboard />} path="/" />
            <Route path="/update-profile" element={<UpdateProfile />} />
            <Route path="projects" element={<Projects />} />
          </Route>
          <Route path="/signup" element=
            {
              <>
                <NavBar />
                <Signup />
              </>
            } />
          <Route path="/login" element={<Login />} />
          <Route path="/log In" element=
            {
              <>
                <NavBar />
                <Login />
              </>
            } />

          <Route path="/forgot-password" element=
            {
              <>
                <NavBar />
                <ForgotPassword />
              </>
            } />

          <Route path="/link" element=
            {
              <>
                <NavBar />
                <LinkMain />
              </>

            } />
          <Route path="/email" element={<EmailMain />} />

          <Route path="/text" element={<TextMain />} />
          <Route path="/call" element={<CallMain />} />
          <Route path="/sms" element={<SmsMain />} />
          <Route path="/v-card" element={<VcardMain />} />
          <Route path="/whatsapp" element={<WhasappMain />} />
          <Route path="/wi-fi" element={<WiFiMain />} />
          <Route path="/paypall" element={<PaypallMain />} />
          <Route path="/event" element={<EventMain />} />
          <Route path="/pdf" element={<PdfMain />} />
          <Route path="/app" element={<AppMain />} />
          <Route path="/images" element={<ImagesMain />} />
          <Route path="/video" element={<VideoMain />} />
          <Route path="/social-media" element={<SocialMediaMain />} />

          <Route path="/Dynamic" element=
            {
              <>
                <NavBar />
                <BenefitsQR title={'Dynamic QR Codes'} mt={'mt-40'} />
                <QRCodeType title={'Dynamic QR Codes'}/>
              </>
            } />
          <Route path="/static" element=
            {
              <>
                <NavBar />
                <BenefitsQR title={'Static QR Codes'} mt={'mt-40'} />
                <QRCodeType title={'Static QR Codes'}/>
              </>
            } />

        </Routes>

      </AppContextProviders>
    </Router>
  )
}

export default App