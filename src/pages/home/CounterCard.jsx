import React, { useEffect } from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";  
import { FaAward } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const CounterCard = () => {

    useEffect(() => {
              AOS.init();
      }, [])

const cards =[
    {
        icon:<FaCheckCircle />,
        number:"657+",
        text:"Projects Completed",

    },
    {
        icon:<HiUserGroup />,
        number:"527+",
        text:"Happy Clients",

    },
    {
        icon:<FaAward />,
        number:"4+",
        text:"Years Experience",

    },
    {
        icon:<FaStar />,
        number:"10+",
        text:"Awards Won",

    }
]    
  return (
    <section className='bg-light-blue/10'>
        <div className='section-container grid md:grid-cols-2 lg:grid-cols-4 py-20 gap-6'>
            {/* card main */}
            {
                cards.map((card, index)=>(  
                <div 
                key={index} 
                data-aos="fade-up"
                data-aos-duration="1000"
                className='text-center border-2 border-primary p-8
                rounded-2xl group hover:-translate-y-4 transition-transform duration-300 hover:bg-primary
                text-primary hover:text-white'>
                    <div className='text-center mx-auto p-3 bg-primary/15 rounded-full inline-block
                     text-4xl group-hover:rotate-y-360 transition-transform duration-400
                     z-10'>
                        {card.icon}
                    </div>
                    <h2 className='text-5xl font-bold my-6'>{card.number}</h2>
                    <p className='text-xl  font-semibold'>{card.text}</p>
                </div>
                ))
            }
        </div>
    </section>
  )
}

export default CounterCard