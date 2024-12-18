import React from 'react';
import { NavLink } from 'react-router-dom';
import {motion} from "framer-motion";
import {fadeIn} from "../variants";
const featuresData =[
    {
        id: 1,
        image: "./images/film.svg",
        text: "Weddings",
        description: "Every moment beautifully captured on your big day.",
        altText: "Wedding coverage",

    },
    {
        id: 2,
        image: "./images/person-video.svg",
        text: "Corporate Videos",
        description: "Tell your brand story with impact and professionalism.",
        altText: "Corporate meeting coverage",
    },
    {
        id: 3,
        image: "./images/camera-reels.svg",
        text: "Event Coverage",
        description: "Relive the energy and excitement of your joyful day.",
        altText: "Event coverage",
    },
]

const Features = ({title="Our Services"}) => {
  return (
    <section className='bg-primary' id="features">
        <div className='container mx-auto md:py-14 flex p-8 w-full h-full flex-col justify-center items-center'>
            <motion.div
                variants={fadeIn("left", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.7}}
                className='my-2 mb-10 md:mb-14 md:text-3xl font-DMSerif text-tertiary  text-xl underline decoration-tertiary'>
                        <h2>{title}</h2>
            </motion.div >
            <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.7}}
                className='lg:grid lg:grid-cols-3 lg:grid-rows-1 lg:gap-10'>
                        {
                    featuresData.map((feature)=>{
                        return(
                            <div key={feature.id} className='container group bg-white shadow-md hover:drop-shadow-xl font-Roboto mb-2 transition-all rounded-lg lg:py-10 lg:px-6 flex w-full h-full text-center flex-col justify-center items-center' > 
                                <img
                                    className='my-4 h-16 w-16 group-hover:scale-125'
                                    src={feature.image}
                                    alt={feature.altText}
                                />
                                <div className=' text-higher mb-4 lg:text-center'>
                                    <h3 className='mb-2 text-lg md:text-xl font-medium'>{feature.text}</h3>
                                    <p className='mb-2 md:text-lg text-base'>{feature.description}</p>
                                    <NavLink to="/portfolio">
                                        <button className='bg-testing text-primary text-sm text-center group-hover:scale-95 p-3 rounded-md transition-all hover:drop-shadow-xl cursor-pointer'>View our portfolio</button>
                                    </NavLink>
                                </div> 
                            </div>
                        )
                    })
                }
            </motion.div>
        </div>
    </section>
  )
}

export default Features;