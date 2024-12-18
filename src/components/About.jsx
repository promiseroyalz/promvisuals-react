import React from 'react';
import {motion} from "framer-motion";
import {fadeIn} from "../variants";
const aboutData =[
    {
        id: 1,
        text: "Welcome to Prom Visuals, where storytelling meets cinematic artistry. We are a passionate team of videographers dedicated to capturing the moments that matter most in your life and business. Whether it’s a wedding, corporate event, music video, or any special occasion, we craft visual experiences that leave a lasting impression.",

    },
    {
        id: 2,
        text: "Founded by Promise Onuorah, Prom Visuals began with a simple mission: to tell compelling stories through the lens of a camera. With years of experience in film production, editing, and creative direction, we are committed to producing high-quality videos that resonate with our clients and their audiences.",

    },
    {
        id: 3,
        text: "We specialize in creating custom videography services tailored to your unique needs. From pre-production planning and concept development to filming and post-production editing, we are with you every step of the way. Our expertise spans across: Weddings & celebrations, corporate & commercial videos, music videos, events & conferences, Documentaries & Personal Projects",

    },
    {
        id: 4,
        text: "At Prom Visuals, we believe in the power of visual storytelling. Our approach combines technical skill with a creative vision to produce videos that are not only visually stunning but emotionally engaging. We take the time to understand your goals and collaborate with you to create a video that exceeds your expectations. We use the latest technology, equipment, and editing software to ensure the highest quality production. Whether you need a small team or a larger crew, we can scale our services to match the scope of your project.",

    },
    {
        id: 5,
        text: "Thank you for considering Prom Visuals to be part of your special project. We look forward to working with you and creating something extraordinary.",

    },
]

const About = ({title="About Us"}) => {
  return (
    <section className=' bg-white' id="about">
        <hr />
        <div className='container mx-auto flex px-8 py-4 w-full h-full flex-col justify-center items-center'>
            <motion.div
                variants={fadeIn("right", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.5}}
                className='py-3 md:py-6 lg:py-8 md:text-3xl font-DMSerif text-tertiary  text-xl underline decoration-tertiary'>
                <h2>{title}</h2>
            </motion.div>
            <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.7}}
                >
                {
                    aboutData.map((about)=>{
                        return(
                            <div key={about.id} className='md:text-xl text-justify lg:mb-4 mb-2 text-lg text-higher'>
                                <p>
                                    {about.text}
                                </p>
                            </div>
                        )
                    })
                }
            </motion.div>
        </div>
        <hr />
    </section>
  )
}

export default About