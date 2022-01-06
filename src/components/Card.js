import Card from 'react-bootstrap/Card';

const CardComponent = ({ CardId, Name, CharacterImage, onClick }) => {
    return (
        <Card className='card' onClick={() => onClick(CardId)}>
            <Card.Img variant='top' src={CharacterImage} className='card-img' />
            <Card.Body className='card-body'>
                <Card.Title>{Name}</Card.Title>
            </Card.Body>
        </Card>
    );
};

export default CardComponent;
