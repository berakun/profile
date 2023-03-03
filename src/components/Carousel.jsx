import { useState, useEffect, createElement } from 'react'
import Typed from 'typed.js';
import React from 'react';
import image from '../assets/carousel/carousel1.png'
import image2 from '../assets/carousel/carousel2.png'
import image3 from '../assets/carousel/carousel3.png'
import ImageSlider, { Slide } from "react-auto-image-slider";
import { Downicon } from '../assets/icon/index';

function Carousel() {
    const [loaded, setLoad] = useState(false)
    useEffect(() => {
        const typed = new Typed('#typed-element', {
            // konfigurasi Typed.js
            strings: ['Design Interior.', 'Design Architecture.', 'Site Plan.'],
            typeSpeed: 110,
            backSpeed: 80,
            loop: true
        });

        setTimeout(() => {
            setLoad(true)
        }, 1000)
        return () => {
            typed.destroy();
        }
    }, []);

    const open = () => {
        window.open('https//google.com', '_blank')
    }

    // const styles = StyleSheet.create({
    //     baseText: {
    //         fontFamily: 'Plus jakarta sans',
    //     },
    //     titleText: {
    //         fontSize: 20,
    //         fontWeight: 'bold',
    //     },
    // });

    return (
        <div>
            <div className='absolute flex flex-col items-center justify-center h-full w-full'>
                <h1 className={`${loaded ? 'opacity-1' : 'opacity-0 translate-y-3'} duration-1000 transition-all text-5xl`}>Architecture Company</h1>
                <div className='inline-flex'>
                    <p className='text-4xl italic pt-4' id="typed-element"></p>
                </div>
                <span onClick={{ open }} className='hover:cursor-pointer hover:text-red-700 inline-flex pt-6 animate-bounce w-10 h-10'>
                    {createElement(Downicon)}
                </span>
            </div>
            <div className='opacity-10 brightness-30'>
                <ImageSlider effectDelay={500} autoPlayDelay={2000} showButton={false}>
                    <Slide>
                        <img alt="img2" src={image} />
                    </Slide>
                    <Slide>
                        <img alt="img2" src={image2} />
                    </Slide>
                    <Slide>
                        <img alt="img1" src={image3} />
                    </Slide>
                </ImageSlider>
            </div>
        </div >
    );
}

export default Carousel;