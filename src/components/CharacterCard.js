import React from 'react';
import Card from 'react-bootstrap/Card';

const CharacterCard = ({ CardId, Name, CharacterImage, handleClick }) => {
    return (
        <Card className='card' onClick={() => handleClick(CardId)}>
            <Card.Img variant='top' src={CharacterImage} className='card-img' />
            <Card.Body className='card-body'>
                <Card.Title>{Name}</Card.Title>
            </Card.Body>
        </Card>
    );
};

export default CharacterCard;
