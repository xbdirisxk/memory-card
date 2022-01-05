import Score from './components/Scores';
import Cards from './components/Cards';
import { useState } from 'react';
import Homer from './images/homer.jpg';
import Bart from './images/Bart.png';
import Merge from './images/merge.jpg';
import MrBurns from './images/MrBurns.png';
import Lisa from './images/Lisa.png';
import MoeSzyslak from './images/Moe_Szyslak.png';
import NedFlanders from './images/Ned_Flanders.png';
import WaylonSmithers from './images/Waylon_Smithers.png';

import ApuNahasapeemapetilon from './images/Apu_Nahasapeemapetilon.png';
import SideShowBob from './images/C-bob.png';
import EdnaKrabappel from './images/Edna_Krabappel.png';
import Krustytheclown from './images/Krustytheclown.png';

const App = () => {
    const [cards, setCards] = useState([
        { id: 1, title: 'Homer', imgUrl: Homer, clicked: false },
        { id: 2, title: 'Bart', imgUrl: Bart, clicked: false },
        { id: 3, title: 'Merge', imgUrl: Merge, clicked: false },
        { id: 4, title: 'Mr. Burns', imgUrl: MrBurns, clicked: false },

        { id: 5, title: 'Lisa', imgUrl: Lisa, clicked: false },
        { id: 6, title: 'Moe Szyslak', imgUrl: MoeSzyslak, clicked: false },
        { id: 7, title: 'Ned Flanders', imgUrl: NedFlanders, clicked: false },

        {
            id: 8,
            title: 'Apu Nahasapeemapetilon',
            imgUrl: ApuNahasapeemapetilon,
            clicked: false,
        },
        { id: 9, title: 'SideShow Bob', imgUrl: SideShowBob, clicked: false },
        {
            id: 10,
            title: 'Edna Krabappel',
            imgUrl: EdnaKrabappel,
            clicked: false,
        },
        {
            id: 11,
            title: 'Krustytheclown',
            imgUrl: Krustytheclown,
            clicked: false,
        },

        {
            id: 12,
            title: 'Waylon Smithers',
            imgUrl: WaylonSmithers,
            clicked: false,
        },
    ]);

    const [scores, setScores] = useState({
        current: 0,
        best: 0,
    });

    // for now restart when all card clicked
    const onClick = (id) => {
        const cardIsClicked = cards
            .map((card) => (card.id === id && card.clicked ? true : false))
            .some((card) => card === true);
        if (!cardIsClicked) {
            setCards(
                cards.map((card) =>
                    card.id === id ? { ...card, clicked: true } : card
                )
            );
            incrementScore();
        } else {
            restartCards();
        }
    };

    const incrementScore = () => {
        setScores({
            current: ++scores.current,
            best: scores.best < scores.current ? scores.current : scores.best,
        });
    };

    const restartCards = () => {
        const newCards = cards.map((card) => {
            const cards = { ...card, clicked: false };
            return cards;
        });
        setCards(newCards);
        setScores({ current: 0, best: scores.best }); // restart current score
    };

    return (
        <div>
            <h1>Simsons Memory Game</h1>
            <Score scores={scores} />
            <Cards cards={cards} onClick={onClick} />
        </div>
    );
};

export default App;
