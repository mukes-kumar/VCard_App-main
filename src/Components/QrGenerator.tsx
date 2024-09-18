import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import vCardJS from 'vcards-js'; // Import the 'vcards-js' library

import './QrGenerator.css'; // Create a CSS file for styling
function QrGenerator() {
  const [vCardData, setVCardData] = useState({
    firstName: '',
    lastName: '',
    workPhone:'',
    country:'',
    city:'',
    street:'',
    org: '',
    tel: '',
    email: '',
    title: '',
    role: '',
    url: '',
    adr: '',
    fb: '',
    linkedIn: '',
    instagram: '',
    youtube: '',
  });

  const [vCardString, setVCardString] = useState('');

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setVCardData({ ...vCardData, [name]: value });
  // };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setVCardData({ ...vCardData, [name]: value });
  };

  
  useEffect(() => {
    const myVCard = vCardJS(); // Create a vCard object using 'vcards-js'

    myVCard.firstName = vCardData.firstName;
    myVCard.lastName = vCardData.lastName;
    myVCard.organization = vCardData.org;
    myVCard.workPhone = vCardData.tel;
    myVCard.email = vCardData.email;
    myVCard.title = vCardData.title;
    myVCard.role = vCardData.role;
    myVCard.url = vCardData.url;
    myVCard.workAddress.street = vCardData.street
    myVCard.workAddress.city =vCardData.city
    myVCard.workAddress.countryRegion =vCardData.country   
    myVCard.note = vCardData.fb;
    myVCard.socialUrls['linkedin'] = vCardData.linkedIn; // Set the LinkedIn URL
    myVCard.socialUrls['instagram'] = vCardData.instagram;
    myVCard.socialUrls['youtube'] = vCardData.youtube;

    const formattedString = myVCard.getFormattedString();
    setVCardString(formattedString);
  }, [vCardData]);

  return (
    <div className="qr-generator-container">
      <h1>Generate vCard QR Code</h1>
      <div className="input-fields">
        <div>
          {/* <NavBar/> */}
          <label>First Name:</label>
          <input type="text" name="firstName" value={vCardData.firstName} onChange={handleInputChange} />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" name="lastName" value={vCardData.lastName} onChange={handleInputChange} />
        </div>
        <div>
          <label>Organization:</label>
          <input type="text" name="org" value={vCardData.org} onChange={handleInputChange} />
        </div>
        <div>
          <label>Work Phone:</label>
          <input type="text" name="tel" value={vCardData.tel} onChange={handleInputChange} />
        </div>
        <div>
          <label>Title:</label>
          <input type="text" name="title" value={vCardData.title} onChange={handleInputChange} />
        </div>
        <div>
          <label>Country:</label>
          <input type="text" name="country" value={vCardData.country} onChange={handleInputChange} />
        </div>
        <div>
          <label>City:</label>
          <input type="text" name="city" value={vCardData.city} onChange={handleInputChange} />
        </div>
        <div>
          <label>Street:</label>
          <input type="text" name="street" value={vCardData.street} onChange={handleInputChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={vCardData.email} onChange={handleInputChange} />
        </div>
        <div>
          <label>Website:</label>
          <input type="text" name="url" value={vCardData.url} onChange={handleInputChange} />
        </div>
        <div>
          <label>LinkedIn:</label>
          <input type="text" name="linkedIn" value={vCardData.linkedIn} onChange={handleInputChange} />
        </div>
      </div>
      <div className="qr-code">
        <QRCode value={vCardString} size={500}   level={"H"}
/>
      </div>
      <h1>{vCardData.linkedIn}</h1>
    </div>
  );
}

export default QrGenerator;
