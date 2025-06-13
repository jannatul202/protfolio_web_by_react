import React, { useEffect } from 'react'
import GradientText from "../components/GradientText";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const SectionHeading = ({title , subtitle}) => {
  useEffect(() => {
          AOS.init();
  }, [])
  return (
        <div 
        className='flex flex-col pt-10 justify-center items-center '
        data-aos="fade-up"
        data-aos-duration="1000" >
          <h2 className='text-black text-2xl font-bold md:text-5xl 
                capitalize mb-4 border-b-4 border-primary pb-5 '>
                    <GradientText
                    colors={["#4079ff", "#9c40ff", "#4079ff", "#9c40ff"]}
                    animationSpeed={10}
                    showBorder={false}
                    className="custom-class">
                        {title}
                    </GradientText>
            </h2>
            <p className='text-gray-500 md:text-xl 
            text-[15px]'>{subtitle}</p>
        </div>
  )
}

export default SectionHeading