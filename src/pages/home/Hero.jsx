import React from 'react'
import { FaBehance, FaFacebook, FaFigma, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router'
import heroBg from '../../assets/herobg.png'
import profile from '../../assets/profile-img.avif'
import figma from '../../assets/figma.svg'
import ps from '../../assets/ps.png'
import behanse from '../../assets/behanse.svg'
import ai from '../../assets/ai.png'
import { motion } from "motion/react"
import {floatingNameTagAnimation } from '../../utils/animations'

const Hero = () => {

  const socialMedias =[
    {icon:<FaBehance />},
    {icon:<FaFacebook />},
    {icon:<FaInstagram />},
    {icon:<FaLinkedin />},
  ]
  
  return (
    <section className='bg-gray-50 pt-30 lg:pt-30 overflow-hidden relative'>
      <motion.div
            //initial={floatingNameTagAnimation.initial}
            //animate={floatingNameTagAnimation.animate}
            //transition={floatingNameTagAnimation.transition}
       className="inset-0 bg-cover bg-no-repeat "
        //className="py-90 bg-none  absolute inset-0 bg-cover bg-no-repeat rotate-195 scale-x-[-1]"
        //style={{ backgroundImage: `url(${heroBg})`,transformOrigin: "center center" }}
      ></motion.div>
      <div className='mt-5 section-container flex md:flex-row lg:flex-row flex-col justify-between
      items-center'>
        <div className='md:w-1/2 z-20'>
          <h1 className='md:text-6xl text-4xl text-primary font-bold md:mb-5 mb-2'>Jannatul Ferdoushi</h1>
          <h3 className='md:text-4xl text-3xl md:mb-5 mb-3 border-b-8 border-primary/20 inline-block pb-3 md:pb-5 font-semibold text-gray-400'>Creative Web Devoloper</h3>
          <p className='text-black text-[15px] md:text-[18px] tracking-wider'>I'm a Front-End Developer skilled in HTML, CSS, JavaScript, React,and Tailwind CSS. I enjoy building clean, responsive, and user-friendly interfaces that bring ideas to life on the web.</p>
          {/* social media */}
          <div className='mt-3 mb-5 space-x-4 flex'>
            {
              socialMedias.map((socialMedia , index)=>(
                <div key={index} className='group pt-5'>
                  <Link to="/" className=' bg-primary/15 p-3 inline-block rounded-lg group-hover:bg-primary group-hover:-translate-y-1.5 transition ease-in-out
                  duration-200 group-hover:text-white text-primary cursor-pointer text-[18px]'>
                    {socialMedia.icon}
                  </Link>
                </div>

              ))
            }
          </div>
          {/* button */}
          <div className='mt-8 space-x-5'>
            <Link 
              to="/"
              className="py-4 px-8 bg-primary text-white rounded-4xl text-[16px] font-bold
              hover:-translate-y-1.5 transition ease-in-out duration-200 inline-block shadow-lg 
              hover:shadow-primary/20 mb-4">
              Hire Me
            </Link>
            <Link 
            className="py-4 px-8 bg-primary/15 text-primary rounded-4xl text-[16px] font-bold
              hover:-translate-y-1.5 transition ease-in-out duration-200 inline-block shadow-lg 
              hover:shadow-primary/20"
            to="/">View Work</Link>
          </div>
        </div>
        <div className='md:w-1/3 z-20 my-20 md:ml-30 pt-5 relative'>
            <img src={profile} 
            alt="profile image" 
            className='rounded-4xl border-2 border-primary'/>
            <motion.div 
            initial={floatingNameTagAnimation.initial}
            animate={floatingNameTagAnimation.animate}
            transition={floatingNameTagAnimation.transition}
            style={{
              transformOrigin: "center center"
            }}
            className='absolute  bg-white bottom-10 -left-15 text-white font-bold rounded-3xl p-2'>
              <img src={figma} alt="figma image" className='h-8 w-8'/>
            </motion.div>
            <motion.div 
            initial={floatingNameTagAnimation.initial}
            animate={floatingNameTagAnimation.animate}
            transition={floatingNameTagAnimation.transition}
            style={{
              transformOrigin: "center center"
            }}
            className='absolute  bg-white top-10 -left-15 text-white font-bold rounded-3xl p-2'>
              <img src={ps} alt="figma image" className='h-8 w-8'/>
            </motion.div>
            <motion.div 
            initial={floatingNameTagAnimation.initial}
            animate={floatingNameTagAnimation.animate}
            transition={floatingNameTagAnimation.transition}
            style={{
              transformOrigin: "center center"
            }}
            className='absolute  bg-white top-10 -right-15 text-white font-bold rounded-3xl p-2'>
              <img src={ai} alt="figma image" className='h-8 w-8'/>
            </motion.div>
            <motion.div 
            initial={floatingNameTagAnimation.initial}
            animate={floatingNameTagAnimation.animate}
            transition={floatingNameTagAnimation.transition}
            style={{
              transformOrigin: "center center"
            }}
            className='absolute  bg-white bottom-10 -right-15 text-white font-bold rounded-3xl p-2'>
              <img src={behanse} alt="figma image" className='h-8 w-8'/>
            </motion.div>
        </div>
      </div> 
    </section>
  )
}

export default Hero
