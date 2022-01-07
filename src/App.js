import Score from './components/Scores';
import Cards from './components/Cards';
import { useState } from 'react';
import './index.css';

import Homer from './images/Homer.png';
import Bart from './images/Bart.png';
import Marge from './images/Marge.png';
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
        { id: 1, name: 'Homer Simpson', imgUrl: Homer, clicked: false },
        { id: 2, name: 'Marge Simpson', imgUrl: Marge, clicked: false },
        { id: 3, name: 'Bart Simpson', imgUrl: Bart, clicked: false },
        { id: 4, name: 'Lisa Simpson', imgUrl: Lisa, clicked: false },
        { id: 5, name: 'Mr. Burns', imgUrl: MrBurns, clicked: false },
        { id: 6, name: 'Moe Szyslak', imgUrl: MoeSzyslak, clicked: false },
        { id: 7, name: 'Ned Flanders', imgUrl: NedFlanders, clicked: false },
        {
            id: 8,
            name: 'Apu Nahas.',
            imgUrl: ApuNahasapeemapetilon,
            clicked: false,
        },
        { id: 9, name: 'SideShow Bob', imgUrl: SideShowBob, clicked: false },
        {
            id: 10,
            name: 'Edna Krabappel',
            imgUrl: EdnaKrabappel,
            clicked: false,
        },
        {
            id: 11,
            name: 'Krustytheclown',
            imgUrl: Krustytheclown,
            clicked: false,
        },
        {
            id: 12,
            name: 'Waylon Smithers',
            imgUrl: WaylonSmithers,
            clicked: false,
        },
    ]);

    const [scores, setScores] = useState({
        current: 0,
        best: 0,
    });

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
            <div className='navbar'>
                <h1 className='title'>Simpsons Memory Game</h1>
                <Score scores={scores} />
            </div>
            <p>click on every card once</p>
            <Cards cards={cards} onClick={onClick} />
        </div>
    );
};

export default App;
