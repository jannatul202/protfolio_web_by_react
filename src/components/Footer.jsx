import React, { useEffect } from 'react'
import { Link } from 'react-router'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {

  useEffect(() => {
            AOS.init();
    }, [])

  return (
    <footer className='bg-gray-50 text-black dark:bg-gray-800 dark:text-white
    pt-15 pb-5'>
      <div className='section-container grid grid-cols-1 sm:grid-col-2 md:grid-cols-5 gap-8 px-8'
      data-aos="fade-up"
      data-aos-duration="1200">
        {/* logo and details */}
        <div className='md:col-span-2'>
          <h2 className='font-bold text-2xl'><Link to="/">Logo Here</Link></h2>
          <p className='md:mr-12 mt-4'>Thank you for visiting my portfolio. I’m always open to discussing new projects,creative ideas, or opportunities to be part of your vision.</p>
        </div>
        {/* services div */}
        <div>
          <h2 className='text-xl font-semibold mb-4 text-primary'>Services</h2>
          <ul className='space-y-2'>
            <li>
              <Link to="/" className='hover:text-primary transition ease-in-out duration-200'>Email Marketing</Link>
            </li>
            <li>
              <Link to="/" className='hover:text-primary transition ease-in-out duration-200'>Campaigns</Link>
            </li>
            <li>
              <Link to="/" className='hover:text-primary transition ease-in-out duration-200'>Branding</Link>
            </li>
          </ul>
        </div>
        {/* Furniture div */}
        <div>
          <h2 className='text-xl font-semibold mb-4 text-primary'>Projects</h2>
          <ul className='space-y-2'>
            <li>
              <Link to="/" className='hover:text-primary transition ease-in-out duration-200'>Ecommerce web</Link>
            </li>
            <li>
              <Link to="/" className='hover:text-primary transition ease-in-out duration-200'>Protfolio web</Link>
            </li>
            <li>
              <Link to="/" className='hover:text-primary transition ease-in-out duration-200'>Blog web</Link>
            </li>
          </ul>
        </div>
        {/* Follow Us div */}
        <div>
          <h2 className='text-xl font-semibold mb-4 text-primary'>Follow Us</h2>
          <ul className='space-y-2'>
            <li>
               <Link to="/" className='hover:text-primary transition ease-in-out duration-200
                 flex justify-start items-center'>
                  <FaFacebookF className='mr-1'/><span>Twitter</span>
                </Link>
            </li>
            <li>
               <Link to="/" className='hover:text-primary transition ease-in-out duration-200
                 flex justify-start items-center'>
                  <FaTwitter className='mr-1'/><span>Twitter</span>
                </Link>
            </li>
            <li>
                <Link to="/" className='hover:text-primary transition ease-in-out duration-200
                flex justify-start items-center'>
                  <FaInstagram className='mr-1'/><span>Twitter</span>
                </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* copy right */}
      <div className='section-container mt-12 flex flex-col sm:flex-row sm:justify-between sm:items-center
      sm:text-center gap-4 text-left texl-black dark:bg-gray-800 dark:text-white border-t border-gray-300
      pt-4'>
        <p>Copyright &copy;{new Date().getFullYear()}</p>
        <div className='flex items-center gap-4'>
          <Link to="/">Terms & Conditions</Link>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer