import Score from './components/Scores';
import Cards from './components/Cards';
import { useState } from 'react';
import Homer from './images/homer.jpg';
import Bart from './images/Bart.png';
import Merge from './images/merge.jpg';
import MrBurns from './images/MrBurns.png';


const App = () => {
	const [cards, setCards] = useState([
        { id: 1, title: 'Homer', imgUrl: Homer, clicked: false },
        { id: 2, title: 'Bart', imgUrl: Bart, clicked: false },
        { id: 3, title: 'Merge', imgUrl: Merge, clicked: false },
        { id: 4, title: 'Mr. Burns', imgUrl: MrBurns, clicked: false },
    ]);

	const [scores, setScores] = useState({
		currentScore:0,
		bestScore: 0,
	})

	// update cards state to shuffle cards
    const onClick = () => {
        setCards([...cards]);
    };

	return (
	<div>
		<h1>Simsons Memory Game</h1>
		<Score/>
		<Cards cards={cards} onClick={onClick}/>
	</div>
	);
};

export default App;
