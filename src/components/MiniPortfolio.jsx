import React from 'react';
import {motion} from "framer-motion";
import {fadeIn} from "../variants";

const MiniPortfolio = ({title = "miniportfolio", source="https://youtu.be/7adDm9YACpE?si=5MrVw5g-V0DM-XG-", description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fringilla, nisl ac rhoncus tempus, eros odio feugiat magna, quis ullamcorper sem enim id magna. Quisque sollicitudin quam eget pellentesque elementum. Phasellus sit amet ante arcu. Aliquam ut neque in magna tristique tristique et id libero. Quisque eget dignissim nulla. Aenean." }) => {
  return (
    <section className='bg-white' id="miniportfolio">
        <div className='container mx-auto flex p-8 w-full h-full flex-col justify-center items-center'>
            <motion.div 
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.7}}
              className=' mb-10 md:mb-14 hover:scale-105 transition-all md:text-3xl font-DMSerif text-tertiary  text-xl underline decoration-tertiary'>
                <h2>{title}</h2>
            </motion.div >
            <div >
                <iframe className='h-screen mb-6 mx-auto w-screen' src="https://www.youtube.com/embed/7adDm9YACpE?si=X3U7BnHMbBsqNOiL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.7}}
              >
                <p className='md:text-xl text-justify mb-4 text-lg text-higher'>{description}</p>
            </motion.div>
        </div>
    </section>
  )
}

export default MiniPortfolio