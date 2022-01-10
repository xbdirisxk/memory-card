import React from 'react';
import '../index.css';

const Footer = () => {
    return (
        <div class='footer'>
            <div className='empty'></div>
            <div class='source'>
                <i class='fa fa-github'></i>
                <a href='#github' className='link'>
                    Source Code
                </a>
            </div>
            <div className='how-to-play'>
                <a href='#help'>how to play</a>
            </div>
        </div>
    );
};

export default Footer;
