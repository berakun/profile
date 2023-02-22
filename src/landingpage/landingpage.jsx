import { useState } from 'react'
import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
// import './tailwind.css';

function landingpage() {
    return (
        <div className='w-screen h-screen'>
            <Navbar />

            <div className="w-screen h-screen">
                <Carousel />
                <div className='flex justify-center items-center'>
                    <h1>IYA HALO</h1>
                </div>
            </div>
        </div>
    );
}

export default landingpage;
