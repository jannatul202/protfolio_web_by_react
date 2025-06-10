import React, { useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { RxHamburgerMenu } from 'react-icons/rx'
import { NavLink } from 'react-router'



const menuIteam =[
    {path :"/", label:"Home"},
    {path :"/services", label:"Services"},
    {path :"/projects", label:"Projects"},
    {path :"/reviews", label:"Reviews"},
    {path :"/contact", label:"Contact"},
]
 
const Navmenu =({toggleHnadle})=>{
    return(
        <>
            <ul className='flex flex-col md:flex-row items-center md:space-x-8 justify-center gap-6 font-semibold'>
                {
                    menuIteam.map((iteam , index)=>(
                        <li key={index} onClick={toggleHnadle}>
                            <NavLink 
                                className={({ isActive }) => isActive ? "text-primary border-b-3 pb-2" : " hover:text-primary hover:border-b-3 pb-2 transition-all ease-in-out duration-200"}
                                to={iteam.path}>{iteam.label}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}


const Navbar = () => {
  
  const[isOpen , setIsOpen] = useState(false)

  const[isScroll , setIsScroll]= useState(false)


  // for toggle
  const toggleHnadle =()=>{
    setIsOpen(prevState => !prevState)
  }

  // for scrolling
  const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};


  // when scoll , apply bg color to navbar
  useEffect(()=>{
    const handleScroll =()=>{
      if(window.scrollY>50){
        setIsScroll(true)
      }else{
        setIsScroll(false)
      }
    }
    window.addEventListener("scroll",handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  },[])

  return (
    <>
    <header
     id="header" 
     className={` text-black fixed top-0 right-0 
     left-0 w-full z-50 py-10 px-4 ${isScroll ? "bg-transparent backdrop-blur-md shadow-lg":"text-black"}`}>
        <nav className="container mx-auto max-w-screen-xl flex justify-between items-center">
          {/* <!-- logo --> */}
           <div className="text-3xl font-bold">
             <a href="#" className="text-primary border-b-3 border-primary">Protfolio Web</a>
           </div>

           {/* hamburger menu for mobile */}
                <div
                onClick={toggleHnadle}
                className='md:hidden block text-xl cursor-pointer hover:text-primary focus:text-primary'>
                    
                    {
                    isOpen ? null :<RxHamburgerMenu />
                    }
            </div>

           {/* <!--desktop menu iteam --> */}
           <div className='hidden md:block'> 
            <Navmenu/>
           </div>

            {/*mobile menu iteam */}
                <div 
                className={`fixed top-0 left-0 w-full h-screen bg-gray-900/80  
                    flex flex-col items-center justify-center space-y-8 text-white transition-transform
                    ${isOpen ? 'translate-x-0':'-translate-x-full'} md:hidden
                    `}>
                    <div className='absolute top-4 right-4 text-xl' onClick={toggleHnadle}>
                        <FaTimes />
                    </div>
                    <Navmenu toggleHnadle={toggleHnadle}/>
                </div>

        </nav>
      </header>
    </>
  )
}

export default Navbar