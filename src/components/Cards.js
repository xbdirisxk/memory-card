import CardComponent from './Card.js';

const Cards = ({ cards, onClick }) => {
    const ShuffledCards = (cards) => {
        const newCards = cards.slice();
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
                    Title={card.title}
                    CharacterImage={card.imgUrl}
                    onClick={onClick}
                />
            ))}
        </div>
    );
};

export default Cards;
