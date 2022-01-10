import React, { useState } from 'react';
import Game from './components/Game';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
    const [scores, setScores] = useState({
        current: 0,
        best: 0,
    });

    const incrementScore = () =>
        setScores({
            current: ++scores.current,
            best: scores.best < scores.current ? scores.current : scores.best,
        });

    const restartScore = () => setScores({ current: 0, best: scores.best });

    return (
        <>
            <Navbar scores={scores} />
            <Game incrementScore={incrementScore} restartScore={restartScore} />
            <Footer />
        </>
    );
};

export default App;
