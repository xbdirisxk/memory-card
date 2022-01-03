import '../index.css'
import CardComponent from './Card.js';
import Homer from  '../images/homer.jpg';
import Bart from '../images/Bart.png';
import Merge from '../images/merge.jpg';
import MrBurns from '../images/MrBurns.png';

const Cards = () => {
    return (
        <div className='grid-cards'>
            <CardComponent simsonChar={Homer}/>
            <CardComponent simsonChar={Merge}/>
            <CardComponent simsonChar={MrBurns}/>
            <CardComponent simsonChar={Bart}/>
        </div>
    )
}

export default Cards;