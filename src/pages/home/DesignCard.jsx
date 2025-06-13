import React, { useEffect } from 'react'
import { FaLightbulb } from "react-icons/fa";
import { FaPencilRuler } from "react-icons/fa";     
import { FaPalette } from "react-icons/fa";
import { FaRocket } from "react-icons/fa6";         
import SectionHeading from '../../components/SectionHeading';
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const DesignCard = () => {

    useEffect(() => {
              AOS.init();
      }, [])


    const cardsDesign =[
        {
            icon:<FaLightbulb />,
            heading:"Discovery",
            peragraph:"Understanding project requirements, researching target audience, and gathering inspiration.",
        },
        {
            icon:<FaPencilRuler />,
            heading:"Conceptualization",
            peragraph:"Sketching ideas, creating wireframes, and developing initial design concepts.",
        },
        {
            icon:<FaPalette />,
            heading:"Design",
            peragraph:"UCreating high-fidelity designs, selecting color schemes, and refining visual elements.",
        },
        {
            icon:<FaRocket />,
            heading:"Delivery",
            peragraph:"Preparing final files, documentation, and ensuring successful implementation.",
        }
    ]
  return (
    <section className='bg-light-blue/60'>
        <div className='container w-full mx-auto py-20 px-10'>
            {/* headding */}
            <SectionHeading title="My Design Process" 
            subtitle="How I transform ideas into exceptional designs" />
            {/* cards */}
            <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 mt-20 gap-6'>
                {
                cardsDesign.map((card , index)=>(
                    <div 
                    key={index}
                    data-aos="fade-up"
                    data-aos-duration="1200" 
                    className='bg-white shadow-md px-5 py-8 rounded-2xl group hover:border-2 hover:border-primary 
                    transition-transform hover:-translate-y-5 ease-in-out duration-400'>
                        <div className='transition hover:-translate-y-5 ease-in-out duration-400
                        group-hover:bg-primary group-hover:text-white p-5 bg-primary/10 text-primary 
                        inline-block text-4xl rounded-2xl skew-x-3 mb-5 group-hover:skew-x-0'>
                            {card.icon}
                        </div>
                        <h2 className='font-bold text-2xl mb-5'>{card.heading}</h2>
                        <p className='text-gray-500 leading-8 text-[18px]'>{card.peragraph}</p>
                    </div>
                    ))
                }

            </div>
        </div>
    </section>
  )
}

export default DesignCard