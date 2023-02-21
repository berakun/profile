import { useState } from 'react'
import React from 'react';
import Navbar from './components/Navbar';
import 'tailwindcss/dist/tailwind.css'
import 'flowbite/css/flowbite.css'

function landingpage() {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold mt-6 mb-3">Hello, World!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
    );
}

export default landingpage;
