import Card from 'react-bootstrap/Card';

const CardComponent = ({simsonChar}) => {
    return (
        <div>
            <Card className='card'>
                <Card.Img variant="top" src={simsonChar} className='card-img'/>
                <Card.Body className='card-title'>
                    <Card.Title >Homer Simpson</Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}


export default CardComponent;