import React from 'react';
import CharacterCard from './CharacterCard.js';
import '../index.css';

const Cards = ({ cards, handleClick }) => {
    const ShuffledCards = (cards) => {
        const newCards = [...cards];
        for (let i = newCards.length - 1; i > 0; i--) {
            const random = Math.floor(Math.random() * (i + 1));
            [newCards[i], newCards[random]] = [newCards[random], newCards[i]];
        }
        return newCards;
    };

    return (
        <div className='grid-cards'>
            {ShuffledCards(cards).map((card) => (
                <CharacterCard
                    key={card.id}
                    CardId={card.id}
                    Name={card.name}
                    CharacterImage={card.imgUrl}
                    handleClick={handleClick}
                />
            ))}
        </div>
    );
};

export default Cards;
