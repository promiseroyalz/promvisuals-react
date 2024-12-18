import React from 'react';
import { NavLink } from 'react-router-dom';

const QuickLinks = () => {
  return (
    <div className='hidden lg:flex flex-col items-center'>
        <h4 className='font-DMSerif text-xl text-tertiary mb-2'>
            Quick Links
        </h4>
        <ul className='text-higher text-lg font-Roboto hover:cursor-pointer'>
            <li className='mb-2'>
                <NavLink to='/'>Home</NavLink></li>
            <li className="mb-2">
                <NavLink to='/portfolio'>Portfolio</NavLink></li>
            <li className="mb-2">
                <NavLink  to='/about'>About</NavLink></li>
            <li className="mb-2">
                <NavLink  to='/services'>Services</NavLink></li>
            <li className="mb-2">
                <NavLink to='/contact'>Contact</NavLink></li>
        </ul>
    </div>
  )
}

export default QuickLinks