import Card from 'react-bootstrap/Card';

const CardComponent = ({ cardId, Title, CharacterImage, onClick }) => {
    return (
        <Card className='card' onClick={() => onClick(cardId)}>
            <Card.Img variant='top' src={CharacterImage} className='card-img' />
            <Card.Body className='card-body'>
                <Card.Title>{Title}</Card.Title>
            </Card.Body>
        </Card>
    );
};

export default CardComponent;
