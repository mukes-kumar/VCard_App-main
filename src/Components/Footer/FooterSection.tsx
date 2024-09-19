import React from 'react'

function FooterSection() {
  return (
    <>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between">
            <div className="mb-4 sm:mb-0">
              <h3 className="text-lg font-bold">Company Name</h3>
              <p>Our Mission Statement</p>
            </div>
            <div className="mb-4 sm:mb-0">
              <h3 className="text-lg font-bold">Quick Links</h3>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold">Follow Us</h3>
              <ul className="flex">
                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p>&copy; 2023 Your Company Name</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default FooterSection