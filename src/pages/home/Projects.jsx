import React, { useEffect } from 'react'
import SectionHeading from '../../components/SectionHeading'
import img1 from '../../assets/img1.avif'
import img2 from '../../assets/img2.avif'
import img3 from '../../assets/img3.avif'
import img4 from '../../assets/img4.avif'
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {

    useEffect(() => {
              AOS.init();
            }, [])


    const projects = [
            {image: img1},
            {image: img2},
            {image: img3},
            {image: img4},
            {image: img1},
            { image: img2},
            {image: img3},
            {image: img4},
            {image: img1},
            { image: img2},
            {image: img4},
        ];
  return (
    <section className='bg-light-blue/60' id="projects">
        <div className='section-container w-full mx-auto py-20 px-10'>
            {/* headding */}
            <SectionHeading title="My Projects" subtitle="Explore my latest work across different design categories" />
            {/* cards */}
            <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 mt-20 gap-6'>
                {
                projects.map((project , index)=>(
                        <div 
                        key={index} 
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        className='overflow-hidden rounded-xl group relative'>
                            <img src={project.image} alt="image"
                            className="w-full h-80 object-cover rounded-xl transform transition-transform 
                            duration-500 group-hover:scale-110" />
                            <div className='hidden group-hover:flex absolute h-80 w-full bg-primary/60 top-0
                            translate ease-in-out duration-200'>
                                <button 
                                className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex justify-center items-center border-2
                                border-white rounded-4xl p-3 text-white hover:bg-white hover:text-primary font-semibold translate
                                ease-in-out duration-200 text-[18px] cursor-pointer'
                                >View in details</button>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    </section>
  )
}

export default Projects