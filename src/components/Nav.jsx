import React , {useState} from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const linkClass = ({isActive }) => isActive ? "p-3 rounded-md bg-testing text-primary hover:drop-shadow-xl transition-all cursor-pointer" : "p-3 rounded-md hover:underline decoration-solid decoration-testing transition-all hover:drop-shadow-xl cursor-pointer";
  return (
    <section className='bg-white group w-full' id="nav">
        <header className='flex justify-between items-center py-4 px-8 w-full h-full' >
            <NavLink to="/">
                <img className='w-6 h-6 group-hover:scale-125 hover:drop-shadow-xl transition-all' src="./images/p-circle.svg" alt="logo" />  
            </NavLink>
            <ul className='hidden lg:flex items-center text-higher gap-12 text-lg'>
                <li>
                  <NavLink className={linkClass} to='/'>Home</NavLink></li>
                <li>
                  <NavLink className={linkClass} to='/portfolio'>Portfolio</NavLink></li>
                <li>
                  <NavLink className={linkClass} to='/about'>About</NavLink></li>
                <li>
                  <NavLink className={linkClass} to='/services'>Services</NavLink></li>
                <li>
                  <NavLink className={linkClass} to='/contact'>Contact</NavLink></li>
            </ul>
            <div className='hidden lg:flex items-center justify-center gap-3'>
              <NavLink to="https://wa.me/+2348168000568/?text=Hello,%20I%20want%20to%20pay%20for%20a%20website%20">
                <button className='bg-testing text-primary text-lg text-center hover:bg-highlight p-3 rounded-md transition-all hover:drop-shadow-xl cursor-pointer'>Book an Appointment</button>
              </NavLink>
            </div>
            <img className='w-5 h-5 cursor-pointer hover:drop-shadow-xl lg:hidden block' src="./images/list.svg" alt="menu icon"
              onClick={()=> setIsMenuOpen(!isMenuOpen)}
            />

            <div 
              className={`absolute lg:hidden top-12 left-0 w-full h-screen bg-primary flex flex-col items-center gap-7 text-base transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
              style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}
            >
              <li className='list-none w-full text-center text-higher p-4 hover:rounded-md hover:bg-testing hover:text-primary transition-all hover:drop-shadow-xl cursor-pointer'>
                <NavLink to='/'>Home</NavLink></li>
              <li className='list-none w-full text-center text-higher p-4 hover:rounded-md hover:bg-testing hover:text-primary transition-all hover:drop-shadow-xl cursor-pointer'>
                <NavLink to='/portfolio'>Portfolio</NavLink></li>
              <li className='list-none w-full text-center text-higher p-4 hover:rounded-md hover:bg-testing hover:text-primary transition-all hover:drop-shadow-xl cursor-pointer'>
                <NavLink to='/about'>About</NavLink></li>
              <li className='list-none w-full text-center text-higher p-4 hover:rounded-md hover:bg-testing hover:text-primary transition-all hover:drop-shadow-xl cursor-pointer'>
                <NavLink to='/services'>Services</NavLink></li>
              <li className='list-none w-full text-center text-higher p-4 hover:rounded-md hover:bg-testing hover:text-primary transition-all hover:drop-shadow-xl cursor-pointer'>
                <NavLink to='/contact'>Contact</NavLink></li>
              <NavLink to="https://wa.me/+2348168000568/?text=Hello,%20I%20want%20to%20pay%20for%20a%20website%20">
                <button className='bg-testing text-primary text-center text-base hover:bg-highlight p-3 w-screen rounded-md transition-all hover:drop-shadow-xl cursor-pointer'>Book an Appointment</button>
              </NavLink>
            </div>
        </header>
        
    </section>
  )
}

export default Nav