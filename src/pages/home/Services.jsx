import React from 'react'
import SectionHeading from '../../components/SectionHeading'
import { services } from '../../utils/services'
import { FaCheck } from 'react-icons/fa6'
import ProgressBar from "@ramonak/react-progress-bar";

const Services = () => {
  return (
    <section className='bg-light-blue/60 'id='home-section'>
        <div className='section-container w-full mx-auto py-20 px-10 text-black'>
            {/* headding */}
            <div className='flex flex-col pt-10 justify-center items-center '>
                <h2 className='text-black text-2xl font-bold md:text-5xl 
                capitalize mb-4 border-b-4 border-primary pb-5 '>My Services</h2>
                <p className='text-gray-500 md:text-xl 
                text-[15px]'>Delivering exceptional design solutions with creativity and precision</p>
            </div>
            {/* cards */}
            <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 mt-20 gap-6'>
                {
                services.map((service , index)=>(
                    <div key={index} className='group bg-white px-8 py-12 rounded-xl
                    border-1 border-gray-200 hover:-translate-y-1.5 transition ease-in-out
                    duration-300 hover:shadow-xl shadow-primary/8'>
                        <div className=' bg-primary/8 p-4 text-2xl inline-block rounded-lg group-hover:bg-primary 
                         group-hover:text-white text-primary transition ease-in-out
                         duration-300'>
                            {service.icon && <service.icon />}
                        </div>
                        <h2 className='my-5 text-[20px] font-bold text-gray-600'>{service.heading}</h2>
                        <p className='my-5 text-gray-400'>{service.details}</p>
                        <ul className="list-inside space-y-1 text-gray-700 pb-5 border-b-1 border-gray-200">
                            {service.list.map((item, i) => (
                                <li key={i}
                                className='text-gray-400 my-2 text-[14px] flex items-center'>
                                    <FaCheck className='text-primary mr-2'/>{item}</li>
                            ))}
                        </ul>
                        <div className='mt-5'>
                            <div className='flex justify-between text-gray-400 text-[14px] mb-2'>
                                <h1>Expertise Level</h1>
                                <span className='text-primary'>{service.progress}%</span>
                            </div>
                            <ProgressBar 
                                completed={service.progress} 
                                bgColor="#3B82F6" 
                                baseBgColor="#E5E7EB" 
                                height="3px"
                                labelColor="#FFFFFF"
                                labelSize="0px"
                                borderRadius="50px"
                            />
                        </div>
                    </div>
                    ))
                }

            </div>
        </div>
    </section>
  )
}

export default Services