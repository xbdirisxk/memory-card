import React from 'react';
import Score from './ScoresBoard';
import '../index.css';

const Navbar = ({ scores }) => {
    return (
        <div className='navbar'>
            <h1 className='game-logo'>Simpsons Memory Game</h1>
            <Score scores={scores} />
        </div>
    );
};

export default Navbar;
