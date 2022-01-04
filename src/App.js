import Score from './components/Scores';
import Cards from './components/Cards';
import { useState } from 'react';
import Homer from './images/homer.jpg';
import Bart from './images/Bart.png';
import Merge from './images/merge.jpg';
import MrBurns from './images/MrBurns.png';

const App = () => {
    const [cards, setCards] = useState([
        { id: 1, title: 'Homer', imgUrl: Homer, clicked: false },
        { id: 2, title: 'Bart', imgUrl: Bart, clicked: false },
        { id: 3, title: 'Merge', imgUrl: Merge, clicked: false },
        { id: 4, title: 'Mr. Burns', imgUrl: MrBurns, clicked: false },
    ]);

    const [scores, setScores] = useState({
        current: 0,
        best: 3,
    });

    // for now restart when all card clicked
    const onClick = (id) => {
        const allCardsClicked = cards.some((card) => card.clicked === false);
        if (allCardsClicked) {
            setCards(
                cards.map((card) =>
                    card.id === id ? { ...card, clicked: true } : card
                )
            );
            incrementScore();
        } else {
            restartGame();
            console.log('Game Over');
        }
    };

    const incrementScore = () => {
        console.log(scores.current);
        setScores({
            current: ++scores.current,
            best: scores.best < scores.current ? scores.current : scores.best,
        });
    };

    const restartGame = () => {
        let checkState = cards.map((card) => {
            let newCards = {
                ...card,
                clicked: false,
            };
            return newCards;
        });
        setCards(checkState);
    };

    //setScores({ current: 0, best: scores.best });
    return (
        <div>
            <h1>Simsons Memory Game</h1>
            <Score scores={scores} />
            <Cards cards={cards} onClick={onClick} />
        </div>
    );
};

export default App;
