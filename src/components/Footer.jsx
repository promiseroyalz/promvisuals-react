import React from 'react';
import QuickLinks from './QuickLinks';
import SocialMediaIcons from './SocialMediaIcons';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <section className=' bg-white group' id="footer">
            <hr />
            <div className='container flex items-center p-8 w-full h-full flex-col'>
                <div className='container px-12 flex w-full h-full justify-between items-center'>
                    <div className='lg:flex hidden flex-col items-center pb-20 w-1/4 h-full'>
                        <div className='flex'>
                            <img className='w-6 h-6 me-2 mt-1 group-hover:scale-125 hover:drop-shadow-xl transition-all' src="./images/p-circle.svg" alt="logo" />
                            <h4 className='font-DMSerif text-xl mb-2 text-tertiary'>
                                Prom Visuals
                            </h4>
                        </div>
                        <div >
                            <p className='font-Roboto mb-2 text-center text-lg text-higher '>Transforming your moments into timeless stories with cinematic precision.</p>
                        </div>
                    </div>
                    <QuickLinks />
                    <QuickLinks />
                    <QuickLinks />
                </div>
                
                <footer className='flex justify-between items-center px-8 w-full h-full'>
                    <p className='font-Roboto text-sm lg:text-lg text-higher'> © {year} Prom Visuals.</p>
                    <SocialMediaIcons />
                </footer>
            </div>
        </section>
    )
}

export default Footer