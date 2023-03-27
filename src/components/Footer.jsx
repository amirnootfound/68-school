import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3></h3>
            <p></p>
          </div>
          <div className="col-md-4">
            <h3>Usefull links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <p>1234 Some Street City, ST 12345 Phone: 555-555-5555 Email: info@yourdomain.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}
