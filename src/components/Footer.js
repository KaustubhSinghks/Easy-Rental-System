import React from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin, BsInstagram, BsTwitterX, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src='images/newsletter.png' />
                <h2 className='mb-0 text-white'>Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className='col-7'>
              <div className='input-group'>
                <input type="text" className="form-control py-1" placeholder="Your Email Address" aria-label="Your Email Address" aria-describedby="basic-addon2" />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div>
                <address className='text-white fs-6'>
                566/6, Bell Road, Society Area, Clement Town, 
                Dehradun, Uttarakhand <br />
                Pincode : 248002
                </address>
                <a href='tel:+91 9555867151' className='mt-3 d-block mb-1 text-white'>
                  +91 9555867151
                </a>
                <a href='mailto:namanguptaprgrammer@gmail.com' className='mt-2 d-block mb-0 text-white'>
                  namanguptaprogrammer@gmail.com
                </a>
                <div className='social-icons d-flex align-items-center gap-30 mt-4'>
                  <a className='text-white' href='https://www.linkedin.com/in/-namangupta/'>
                    <BsLinkedin className='fs-5'/>
                  </a>
                  <a className='text-white' href='https://www.instagram.com/itss_naman/'>
                    <BsInstagram className='fs-5'/>
                  </a>
                  <a className='text-white' href='http://www.youtube.com/@itss_naman'>
                    <BsYoutube className='fs-5'/>
                  </a>
                  <a className='text-white' href='https://x.com/Pikachu020802'>
                    <BsTwitterX className='fs-5'/>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-links d-flex flex-column'> 
                <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
                <Link className='text-white py-2 mb-1'>Return Policy</Link>
                <Link className='text-white py-2 mb-1'>Shipping Policy</Link>
                <Link className='text-white py-2 mb-1'>Terms & Conditons</Link>
                <Link className='text-white py-2 mb-1'>Blogs</Link>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-links d-flex flex-column'> 
                <Link className='text-white py-2 mb-1'>About Us</Link>
                <Link className='text-white py-2 mb-1'>FAQ</Link>
                <Link className='text-white py-2 mb-1'>Contact</Link>
              </div>
            </div>
            <div className='col-2'>
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-links d-flex flex-column'> 
                <Link className='text-white py-2 mb-1'>Laptops</Link>
                <Link className='text-white py-2 mb-1'>Headphones</Link>
                <Link className='text-white py-2 mb-1'>Tablets</Link>
                <Link className='text-white py-2 mb-1'>Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
            <div className='row'>
              <div className='col-12'>
                <p className='text-center mb-0 text-white'>&copy; {new Date().getFullYear()}; Powered by Naman's Programming World</p>
              </div>
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
