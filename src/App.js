import React, { useState } from 'react';
import Game from './components/Game';
import Score from './components/ScoresBoard';
import './index.css';

const App = () => {
    const [scores, setScores] = useState({
        current: 0,
        best: 0,
    });

    const incrementScore = () => {
        setScores({
            current: ++scores.current,
            best: scores.best < scores.current ? scores.current : scores.best,
        });
    };

    const restartScore = () => {
        setScores({ current: 0, best: scores.best });
    };
    return (
        <div>
            <div className='navbar'>
                <h1 className='game-logo'>Simpsons Memory Game</h1>
                <Score scores={scores} />
            </div>
            <Game incrementScore={incrementScore} restartScore={restartScore} />
        </div>
    );
};

export default App;
