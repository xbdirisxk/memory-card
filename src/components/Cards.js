import { useState } from 'react';
import CardComponent from './Card.js';
import Homer from '../images/homer.jpg';
import Bart from '../images/Bart.png';
import Merge from '../images/merge.jpg';
import MrBurns from '../images/MrBurns.png';

const Cards = () => {
    const [cards, setCards] = useState([
        { id: 1, title: 'Homer', imgUrl: Homer, clicked: false },
        { id: 2, title: 'Bart', imgUrl: Bart, clicked: false },
        { id: 3, title: 'Merge', imgUrl: Merge, clicked: false },
        { id: 4, title: 'Mr. Burns', imgUrl: MrBurns, clicked: false },
    ]);

    const ShuffledCards = (cards) => {
        const newCards = cards.slice();
        for (let i = newCards.length - 1; i > 0; i--) {
            const random = Math.floor(Math.random() * (i + 1));
            [newCards[i], newCards[random]] = [newCards[random], newCards[i]];
        }
        return newCards;
    };

    // onclick  update state to shuffle cards
    const onClick = () => {
        setCards([...cards]);
    };

    return (
        <div className='grid-cards'>
            {ShuffledCards(cards).map((card) => (
                <CardComponent
                    key={card.id}
                    Title={card.title}
                    CharacterImage={card.imgUrl}
                    onClick={onClick}
                />
            ))}
        </div>
    );
};

export default Cards;
