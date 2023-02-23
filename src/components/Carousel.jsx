import { useState, useEffect } from 'react'
import Typed from 'typed.js';
import React from 'react';
import image from '../assets/carousel/carousel1.png'
import image2 from '../assets/carousel/carousel2.png'

// const item = [
//     {
//         position: 0,
//         el: document.getElementById('carousel-item-1')
//     },
//     {
//         position: 1,
//         el: document.getElementById('carousel-item-2')
//     }
// ]

// const options = {
//     defaultPosition: 0,
//     interval: 3000,

//     indicators: {
//         activeClasses: 'bg-white dark:bg-gray-800',
//         inactiveClasses: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
//         items: [
//             {
//                 position: 0,
//                 el: document.getElementById('carousel-indicator-1')
//             },
//             {
//                 position: 1,
//                 el: document.getElementById('carousel-indicator-2')
//             }
//         ]
//     },
//     onNext: () => {
//         console.log('next slider item is shown');
//     },
//     onPrev: () => {
//         console.log('previous slider item is shown');
//     },
//     onChange: () => {
//         console.log('new slider item has been shown');
//     }
// };

// const carousel = new Carousel(items, options);

function Carousel() {

    useEffect(() => {
        const typed = new Typed('#typed-element', {
            // konfigurasi Typed.js
            strings: ['Design Interior', 'Design Architecture', 'Side Plan'],
            typeSpeed: 200,
            backSpeed: 150,
            loop: true
        });

        return () => {
            typed.destroy();
        }
    }, []);

    return (
        <div id="animation-carousel" className="relative h-screen w-screen" data-carousel="static">
            {/* <!-- Carousel wrapper --> */}
            <div className='absolute flex flex-col items-center justify-center h-full w-full'>
                <h1>Architecture Company</h1>
                <div className='inline-flex'>
                    <p className='text-4xl italic ' id="typed-element"></p>
                </div>
            </div>

            <div className="opacity-5 relative h-56 overflow-hidden rounded-lg md:h-screen">
                {/* <!-- Item 1 --> */}
                <div className="duration-50 ease-linear" data-carousel-item>
                    <img src={image} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                {/* <!-- Item 2 --> */}
                <div className="hidden duration-50 ease-linear" data-carousel-item>
                    <img src={image2} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
            </div>
            {/* <!-- Slider controls --> */}
            <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
}

export default Carousel;