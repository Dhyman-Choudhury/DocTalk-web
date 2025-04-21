import React from 'react';
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-white  p-10">
            <aside>
                <div className="grid grid-flow-col gap-4">
                    <div className='flex  items-center gap-2'>
                        <img className='w-8' src={logo} alt="Logo" />
                        <NavLink to='/' className=" text-xl font-bold">DocTalk</NavLink>
                    </div>
                </div>
                <div className="navbar-center  flex">
                    <ul className="menu menu-horizontal px-1 space-x-3">
                        <li><NavLink className={({ isActive }) => isActive ? 'bg-blue-400 text-white' : ''} to='/'>Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'bg-blue-400 text-white' : ''} to='/bookings'>Bookings</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'bg-blue-400 text-white' : ''} to='/blogs'>Blogs</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'bg-blue-400 text-white' : ''} to='/contact'>Contact</NavLink></li>
                    </ul>
                </div>
            </aside>
            <hr className='w-[70%] mx-auto border-gray-300' />
            <nav>
                <a
                    href="https://www.facebook.com"
                    target="_blank"
                    className="text-blue-600"
                >
                    <FaFacebook size={30} />
                </a>

            </nav>
        </footer>
    );
};

export default Footer;