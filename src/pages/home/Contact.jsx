import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { Link } from 'react-router';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";    
import SectionHeading from '../../components/SectionHeading';

const Contact = () => {
  return (
    <section className='bg-bg-gray'>
      <div className='section-container'>
        {/* headding */}
        <SectionHeading title="Get in Touch" 
        subtitle="Let's discuss your project and bring your ideas to life" />
        {/* contact form main */}
        <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-10  py-20'>
          {/* left content */}
          <div className='p-10 shadow-xl shadow-primary/8 bg-white rounded-lg'>
            <div className='group'>
                <span className=' bg-primary/20 p-2 inline-block rounded-lg group-hover:bg-primary group-hover:-translate-y-1.5 transition ease-in-out
                duration-200 group-hover:text-white text-primary '>
                  <IoLocationSharp className='text-2xl '/>
                </span>
                <h4 className='text-xl font-bold mt-3 mb-3'>Location</h4>
                <p className='text-gray-400 '>Gazipur, Konabari</p>
            </div>
            <div className='group mt-8'>
                <span className=' bg-primary/20 p-2 inline-block rounded-lg group-hover:bg-primary group-hover:-translate-y-1.5 transition ease-in-out
                duration-200 group-hover:text-white text-primary '>
                  <FaEnvelope className='text-2xl '/>
                </span>
                <h4 className='text-xl font-bold mt-3 mb-3'>Email</h4>
                <p className='text-gray-400 '>random@gmail.com</p>
            </div>
            <div className='group mt-8'>
                <span className=' bg-primary/20 p-2 inline-block rounded-lg group-hover:bg-primary group-hover:-translate-y-1.5 transition ease-in-out
                duration-200 group-hover:text-white text-primary '>
                  <FaPhoneAlt className='text-2xl '/>
                </span>
                <h4 className='text-xl font-bold mt-3 mb-3'>Phone</h4>
                <p className='text-gray-400 '>+880193456247</p>
            </div>
            {/* socials */}
            <div className='mt-5 mb-5 space-x-4 flex'>
                <div className='group pt-10'>
                  <Link to="/" className=' bg-primary/20 p-2 inline-block rounded-lg group-hover:bg-primary group-hover:-translate-y-1.5 transition ease-in-out
                  duration-200 group-hover:text-white text-primary cursor-pointer '>
                    <FaFacebookF className='text-xl '/>
                  </Link>
                </div>
                <div className='group pt-10'>
                  <Link to="/" className=' bg-primary/20 p-2 inline-block rounded-lg group-hover:bg-primary group-hover:-translate-y-1.5 transition ease-in-out
                  duration-200 group-hover:text-white text-primary cursor-pointer '>
                    <FaInstagram  className='text-xl '/>
                  </Link>
                </div>
                <div className='group pt-10'>
                  <Link to="/" className=' bg-primary/20 p-2 inline-block rounded-lg group-hover:bg-primary group-hover:-translate-y-1.5 transition ease-in-out
                  duration-200 group-hover:text-white text-primary cursor-pointer '>
                    <FaLinkedinIn className='text-xl '/>
                  </Link>
                </div>
            </div>
          </div>
          {/* roght content */}
          <div className='md:col-span-2 shadow-xl shadow-primary/8 bg-white rounded-lg p-10 '>
            <form>
              <div className='mb-5 rounded-lg'>
                <input type="text" placeholder='Your Name' 
                className='border-2 border-gray-300 focus:outline-primary w-full p-4 rounded-lg'/>
              </div>
              <div className='mb-5 rounded-lg'>
                <input type="email" placeholder='Your Email' 
                className='border-2 border-gray-300 focus:outline-primary w-full p-4 rounded-lg'/>
              </div>
              <div className='mb-5 rounded-lg'>
                <input type="text" placeholder='Subjects' 
                className='border-2 border-gray-300 focus:outline-primary w-full p-4 rounded-lg'/>
              </div>
              <div className='mb-5 rounded-lg'>
                <textarea placeholder='Massage' className=' h-30 border-2 border-gray-300 focus:outline-primary w-full p-4 rounded-lg '
                ></textarea>
              </div>
              <div className='group'>
                <button className='flex justify-center items-center gap-2 bg-primary text-white w-full p-4 rounded-lg
                font-semibold text-xl group-hover:bg-primary/80 transition ease-in-out duration-200 cursor-pointer'>Send Massage <span className='text-3xl'><IoIosSend /></span></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact