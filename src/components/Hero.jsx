import React from 'react';
import SocialMediaIcons from './SocialMediaIcons';
import {motion} from "framer-motion";
import {fadeIn} from "../variants";


  const Hero = ({name="Prom Visuals", paragraph="Transforming your moments into timeless stories with cinematic precision.", description="Videography and video directing.", image="./images/IMG_4786.JPG"}) => {
  return (
    <section className='bg-white group h-full' id="hero">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}
      >
        <div className='mx-auto flex py-7 px-8 w-full h-full flex-col justify-center items-center'>
            <h1 className=' text-testing group-hover:scale-125 transition-all text-center text-3xl md:text-4xl py-2 md:py-3 lg:py-5 font-medium font-DMSerif'>{name}</h1>
            <h2 className='md:text-2xl text-xl text-center py-1 font-medium text-higher font-Roboto'>{description}</h2>              
            <p className='md:text-xl text-lg text-center py-1 leading-8 text-higher font-Roboto'>{paragraph}</p>
        </div>
        <div className='flex justify-center items-center mx-auto'>
          <SocialMediaIcons />
        </div>
        <div className=' flex justify-center items-center mx-auto mt-7 mb-2'>
          <img src={image} alt="Hero image" className='rounded-full group-hover:scale-105 transition-all hover:drop-shadow-xl w-48 h-48 md:w-60 md:h-60 object-cover' />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero