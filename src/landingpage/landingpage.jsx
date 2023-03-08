import { useState } from 'react'
import React from 'react';
import Navbar from '../components/landingpagecomponents/Navbar';
import Carousel from '../components/landingpagecomponents/Carousel';
import Pageprofile from '../components/landingpagecomponents/pageprofile';
import Pageimage from '../components/landingpagecomponents/pageimage';
import Titleimage from '../components/landingpagecomponents/titleimage';

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
            <div className="w-screen">
                <Titleimage />
            </div>
            <div className="bg-neutral-900 w-screen h-screen">
                <Pageimage />
            </div>
        </div>
    );
}

export default landingpage;
