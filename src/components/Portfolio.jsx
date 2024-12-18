import React from 'react';
import { NavLink } from 'react-router-dom';
import {motion} from "framer-motion";
import {fadeIn} from "../variants";
const portfolioData =[
    {
        id: 1,
        image: "./images/IMG_4728.JPG",
        text: "Davido's Wedding",
        description: "Every moment beautifully captured on Davido and Chioma's big day.",
        altText: "Wedding",
        linkUrl: "/davido",

    },
    {
        id: 2,
        image: "./images/IMG_4730.JPG",
        text: "Tony Elumelu's company's advertisement",
        description: "We told Tony Elumelu's brand story with impact and professionalism.",
        altText: "Corporate meeting",
        linkUrl: "/tony",
    },
    {
        id: 3,
        image: "./images/IMG_4731.JPG",
        text: "Asake live in London",
        description: "We covered the energy and excitement of Asake's o2 performance.",
        altText: "Event",
        linkUrl: "/asake",
    },
    {
        id: 4,
        image: "./images/IMG_4731.JPG",
        text: "Wizkid live in London",
        description: "We covered the energy and excitement of Wizkid's o2 performance.",
        altText: "Event",
        linkUrl: "/wizkid",
    },
    {
        id: 5,
        image: "./images/IMG_4728.JPG",
        text: "Veekee James' Wedding",
        description: "Every moment beautifully captured on Veekee and Femi's big day.",
        altText: "Wedding",
        linkUrl: "/veekee",
    },
    {
        id: 6,
        image: "./images/IMG_4730.JPG",
        text: "Beauty Tukura's advert for Fayrouz",
        description: "We told Beauty Tukura's brand story with impact and professionalism.",
        altText: "Corporate meeting",
        linkUrl: "/beauty",
    },
]

const Portfolio = ({title="Our Portfolio"}) => {
  return (
    <section className='bg-primary' id="portfolio">
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
                variants={fadeIn("right", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.5}}
                className='lg:grid lg:grid-cols-3 lg:grid-rows-1 lg:gap-10'>
                {
                    portfolioData.map((portfolio)=>{
                        return(
                            <div key={portfolio.id} className='container group cursor-pointer bg-white shadow-md hover:drop-shadow-xl font-Roboto mb-2 transition-all rounded-lg py-10 lg:py-10 lg:px-6 flex w-full h-full text-center flex-col justify-center items-center' >
                                <NavLink to={portfolio.linkUrl}>
                                    <img
                                        className='mb-4 group-hover:scale-105 h-44 w-full object-cover'
                                        src={portfolio.image}
                                        alt={portfolio.altText}
                                    />
                                    <div className=' text-higher mb-4 lg:text-center'>
                                        <h3 className='mb-2 text-lg md:text-xl font-medium'>{portfolio.text}</h3>
                                        <p className='mb-4 lg:mb-0 md:text-lg text-base'>{portfolio.description}</p>
                                    </div> 
                                </NavLink>
                            </div>
                        )
                    })
                }
            </motion.div>
            
        </div>
    </section>
  )
}

export default Portfolio