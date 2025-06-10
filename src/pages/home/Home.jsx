import React from 'react'
import Hero from './Hero'
import Services from './Services'
import Projects from './Projects'
import Reviews from './Reviews'
import Contact from './Contact'
import DesignCard from './DesignCard'
import CounterCard from './CounterCard'

const Home = () => {
  return (
    <>
    <Hero/>
    <CounterCard/>
    <Services/>
    <Projects/>
    <Reviews/>
    <DesignCard/>
    <Contact/>
    </>
  )
}

export default Home