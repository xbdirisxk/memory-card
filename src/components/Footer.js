import React from 'react';
import '../index.css';

const Footer = () => {
    return (
        <div class='footer'>
            <div className='empty'></div>
            <div class='source'>
                <i class='fa fa-github'></i>
                <a
                    href='https://github.com/xbdirisxk/memory-card'
                    className='source-link'
                >
                    Source Code
                </a>
            </div>
            <div className='how-to-play'>
                <a href='https://github.com/xbdirisxk/memory-card/blob/main/README.md#how-to-play-this-game'>
                    how to play
                </a>
            </div>
        </div>
    );
};

export default Footer;
