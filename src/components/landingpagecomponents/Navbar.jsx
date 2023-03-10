
import React, { createElement, useEffect, useState } from 'react';
import { Logo } from '../../assets/logo/indexlogo';
import { Fb, Ig, Linkedin, Wa } from '../../assets/icon/index';

function Navbar() {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [hide, setHide] = useState(false)

    useEffect(() => {
        function handleScroll() {
            const position = window.pageYOffset;
            setScrollPosition(position);

            if (position > 0) {
                setHide(true)
            } else if (position === 0) {
                setHide(false)
            }
        }

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const sosmed = ['https://instagram.com', 'https://facebook.com', 'https://linkedin.com', 'https://whatsapp.com']
    const open = () => {
        window.open({ sosmed }, '_blank')
    }
    const i = { Fb, Ig, Linkedin, Wa }
    const icons = Object.entries(i).map(([k, v], f) => {
        return (
            // <li key={k} style={{ transitionDelay: `${200 * (f + 1)}ms` }} className={` text-black transition-all duration-1000 ${hide ? 'opacity-1' : '-translate-y-2/4 opacity-0'}`}>
            // <li key={k} onClick={open} className={`cursor-pointer transition-all duration-700 ${hide ? 'text-black' : 'text-white'}`}>
            <li key={k} onClick={open} className={`cursor-pointer  transition-all duration-100 ${hide ? 'text-black hover:text-red-700 transition translate-y-2 delay-75' : 'text-white hover:text-red-700'}`}>
                <span className='text-white-500 w-4 appearance-none'>
                    {/* <img src={iconSrc} className="h-6 mr-3 sm:h-5" /> */}
                    {createElement(v)}
                </span>
            </li>
        )
    })
    return (

        <nav className={`px-2 sm:px-4 py-1 rounded-none fixed w-full z-20 top-0 backdrop-opacity-10 backdrop-invert bg-black/30 transition-all delay-75 ${scrollPosition > 10 ? 'bg-white transition -translate-y-4 delay-300' : 'bg-opacity-0'} `} >
            <div className="flex flex-wrap items-center justify-between mx-2 logo">
                <a href="" className={`transition-all duration-500 flex items-center mr-3 sm:h-10 h-[60px]' ${hide ? 'text-black hover:text-red-700 transition -translate delay-57 w-[200px] h-[200px]' : 'text-white hover:text-red-700'}`}>
                    {createElement(Logo)}
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className={`flex flex-col p-4 mt-4 border transition-all duration-1000 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0`}>
                        {/* <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white"> */}
                        {icons}
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;
