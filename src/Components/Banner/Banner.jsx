import { Container } from '@mui/material';
import React from 'react';
import Corousel from './Corousel';

const Banner = () => {
    const bannerStyle = {
        backgroundImage: `url('https://incyber.org/wp-content/uploads/2021/08/ARTICLE-CRYPTO-2-1.png')`,
        height: '200px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const textStyle = {
        textAlign: 'center',
        zIndex: 1,
        fontFamily: 'Montserrat, sans-serif ',
    };

    return (
        <div style={bannerStyle}>
            <Container className='bg-transparent p-5 rounded-md backdrop-blur-md backdrop-opacity-100' >
                <h1 style={textStyle} className="text-4xl  bg-transparent font-bold">Welcome to Crypto Tracker</h1>
                <p style={textStyle} className="text-black bg-transparent font-bold">Just a hobby project</p>

                <Corousel />
            </Container>
        </div>
    );
};

export default Banner;
