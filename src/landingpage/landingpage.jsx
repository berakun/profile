import { useState } from 'react'
import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Pageprofile from '../components/pageprofile';
import Pageimage from '../components/pageimage';

function landingpage() {

    return (
        <div className='w-screen h-screen'>
            <Navbar />

            <div className="w-screen h-screen">
                <Carousel />
            </div>
            <div className="w-screen h-screen">
                <Pageprofile />
            </div>
            <div className="w-screen h-screen">
                <Pageimage />
            </div>
        </div>
    );
}

export default landingpage;
