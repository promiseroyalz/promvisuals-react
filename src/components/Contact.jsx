import React, { useRef } from 'react';
import {motion} from "framer-motion";
import {fadeIn} from "../variants";

import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api'

const Contact = ({title="Contact Us"}) => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_e1sn8q8', 'template_c9yup3s', form.current, {
            publicKey: '1K-pfkMVK4cWCSIWS',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            alert("Message sent successfully.");
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };

    const containerStyle = {
        width: '100%',
        height: '300px',
    }
      
    const center = {
    lat: 6.536259,
    lng: 3.362180,
    }
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyDiEsJhio8S5_M0oUUesimK6JshVi173a8',
    })
    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center)
        map.fitBounds(bounds)

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])
    const streetName = "Adelakun Street"
    const [marker, setMarker]= React.useState("");
    function handleClick(){
        setMarker(streetName)
    }
    return (
        <section className=' bg-white shadow-xl' id="contact">
            <hr />
            <div className='container mx-auto flex px-8 py-4 w-full h-full flex-col justify-center items-center'>
                <motion.div 
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: false, amount: 0.7}}
                    className='py-2 md:pt-6 lg:pt-8 md:text-3xl font-DMSerif text-tertiary  text-xl underline decoration-tertiary'>
                    <h2>{title}</h2>
                </motion.div>
                <motion.div 
                    variants={fadeIn("right", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: false, amount: 0.5}}
                    className='lg:flex lg:flex-row flex-col px-1 items-center justify-center'>
                    <form className='mb-2 lg:py-10 flex-col py-4 lg:px-6 font-Roboto' ref={form} onSubmit={sendEmail}>
                        <h3 className="md:text-xl text-center lg:mb-4 mb-2 text-lg text-higher font-medium">Send us a message</h3>
                        <div>
                            <label className='block md:text-lg mb-1 text-base text-higher' htmlFor="name" >
                                Your name
                            </label>
                            <input className='bg-primary shadow text-higher rounded-sm md:py-1 px-3 mb-1 w-full focus:outline-testing' type="text" name="user_name" id="user_name" required />
                        </div>
                        <div>
                            <label className='block md:text-lg mb-1 text-base text-higher' htmlFor="email" >
                                Your email
                            </label>
                            <input
                                className='bg-primary shadow text-higher rounded-sm md:py-1 px-3 mb-1 w-full focus:outline-testing'
                                type="email" name="user_email" id="user_email" required 
                            />
                        </div>
                        <div>
                            <label className='block md:text-lg mb-1 text-base text-higher' htmlFor="message" >
                                Message
                            </label>
                            <textarea className='bg-primary shadow text-higher rounded-sm md:py-1 px-3 mb-1 w-full focus:outline-testing' id="message" type="text" name="message" rows="4" cols="50"></textarea>
                        </div>
                        <div>
                            <input
                                className='focus:outline-none shadow lg:mb-0 md:text-lg hover:bg-testing bg-blue-500 mb-4 text-base text-primary rounded-sm md:py-1 px-3 w-full text-center'
                                type="submit" value="Send"
                            />
                        </div>
                    </form>
                    <div className='lg:px-6 py-4 flex-col'>
                        <h3 className="md:text-xl text-center lg:mb-12 mb-4 text-lg text-higher font-medium" >Our Location</h3>
                        <div className=' lg:w-96 lg:hover:drop-shadow-lg h-full'>
                            {
                                isLoaded ? (
                                    <GoogleMap
                                        
                                        mapContainerStyle={containerStyle}
                                        center={center}
                                        zoom={10}
                                        onLoad={onLoad}
                                        onUnmount={onUnmount}
                                    >
                                        <MarkerF position={center} onClick={handleClick}>
                                            <div><h4>{marker}</h4></div>
                                        </MarkerF>
                                    </GoogleMap>
                                ): null
                            }
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact