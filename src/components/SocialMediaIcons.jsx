import React from 'react';
import { NavLink } from 'react-router-dom';

const footerData =[
    {
        id: 1,
        image: "./images/linkedin.svg",
        altText: "Linkedin logo",
        link: "https://www.linkedin.com/in/promise-onuorah-73489732b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",

    },
    {
        id: 2,
        image: "./images/instagram.svg",
        altText: "instagram logo",
        link: "https://www.instagram.com/promise_royalz?igsh=N3IwOTZnMjJ0a2Fn&utm_source=qr",
    },
    {
        id: 3,
        image: "./images/facebook.svg",
        altText: "Facebook logo",
        link: "https://www.facebook.com/share/1Er8HCaNTi/?mibextid=LQQJ4d"
    },
]
const SocialMediaIcons = () => {
    return (
        <div className='flex'>
            {
                footerData.map((footer)=>{
                    return(
                        <div key={footer.id}>
                            <NavLink to={footer.link} > 
                                <img
                                    className='my-4 hover:scale-125 hover:drop-shadow-xl px-2 transition-all h-10 w-10 '
                                    src={footer.image}
                                    alt={footer.altText}
                                />
                            </NavLink>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SocialMediaIcons