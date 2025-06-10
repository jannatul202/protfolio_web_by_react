import React from 'react'

const SectionHeading = ({title , subtitle}) => {
  return (
        <div className='flex flex-col pt-10 justify-center items-center '>
            <h2 className='text-primary text-2xl font-bold md:text-5xl 
            capitalize mb-4 border-b-4 pb-5 '>{title}</h2>
            <p className='text-gray-500 md:text-xl 
            text-[15px]'>{subtitle}</p>
        </div>
  )
}

export default SectionHeading