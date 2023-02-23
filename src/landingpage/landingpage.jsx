import { useState } from 'react'
import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';

function landingpage() {

    return (
        <div className='w-screen h-screen'>
            <Navbar />

            <div className="w-screen h-screen">
                <Carousel />
            </div>
        </div>
    );
}

export default landingpage;
