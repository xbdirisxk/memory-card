import Card from 'react-bootstrap/Card';

const CardComponent = ({ Title, CharacterImage }) => {
    return (
        <Card className='card'>
            {console.log('card component updated')}
            <Card.Img variant='top' src={CharacterImage} className='card-img' />
            <Card.Body className='card-body'>
                <Card.Title>{Title}</Card.Title>
            </Card.Body>
        </Card>
    );
};

export default CardComponent;
