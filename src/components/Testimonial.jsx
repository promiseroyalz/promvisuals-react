import React from 'react';
import {motion} from "framer-motion";
import {fadeIn} from "../variants";
const testimonialData =[
    {
        id: 1,
        name: "Wizkid",
        position: "Singer/songwriter",

    },
    {
        id: 2,
        name: "Davido",
        position: "Singer/songwriter",
    },
    {
        id: 3,
        name: "Burnaboy",
        position: "Singer/songwriter",
    },
]

const Testimonial = ({title="Testimonials", svgUrl="./images/quote.svg", image="./images/IMG_9391.jpg", altText= "Customer review",  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar libero et erat posuere fermentum. Nullam vehicula a ex eu accumsan. Morbi orci orci, molestie nec molestie eu, viverra vitae diam."}) => {
  return (
    <section className='bg-primary' id="testimonial">
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
                    testimonialData.map((testimonial)=>{
                        return(
                            <div key={testimonial.id} className='container relative group transition-all bg-white shadow-md hover:drop-shadow-xl font-Roboto mb-2 rounded-lg lg:py-10 lg:px-6 flex w-full h-full text-center flex-col justify-center items-center' > 
                                <img className='absolute top-0 left-5' src={svgUrl} alt="quote"/>
                                <img
                                    className='mb-4 my-4 group-hover:scale-125 rounded-full h-16 w-16 '
                                    src={image}
                                    alt={altText}
                                />
                                <div className=' text-higher mb-4'>
                                    <p className='mb-4 md:text-base text-sm'>{text}</p>
                                    <h3 className='mb-4 text-base md:text-lg font-medium'>{testimonial.name}</h3>
                                    <p className='mb-4 lg:mb-0 md:text-base text-sm'>{testimonial.position}</p>
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

export default Testimonial