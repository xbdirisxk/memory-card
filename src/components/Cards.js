import CardComponent from './Card.js';
import '../index.css';

const Cards = ({ cards, onClick }) => {
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
                <CardComponent
                    key={card.id}
                    CardId={card.id}
                    Name={card.name}
                    CharacterImage={card.imgUrl}
                    onClick={onClick}
                />
            ))}
        </div>
    );
};

export default Cards;
