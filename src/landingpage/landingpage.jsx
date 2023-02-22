import { useState, useEffect } from 'react'
import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Typed from 'typed.js';

function landingpage() {

    useEffect(() => {
        const typed = new Typed('#typed-element', {
            // konfigurasi Typed.js
            strings: ['IYA HALO!', 'TRY TO BE A NICE GUY!'],
            typeSpeed: 200,
            backSpeed: 150,
            loop: true
        });

        return () => {
            typed.destroy();
        }
    }, []);
    return (
        <div className='w-screen h-screen'>
            <Navbar />

            <div className="w-screen h-screen">
                <Carousel />
                <div className='flex justify-center items-center mr-6'>
                    <p className='text-2xl' id="typed-element"></p>
                </div>
            </div>
        </div>
    );
}

export default landingpage;
