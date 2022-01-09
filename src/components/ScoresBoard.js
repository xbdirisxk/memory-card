import '../index.css';

const Score = ({ scores }) => {
    return (
        <div className='scores'>
            <span> SCORE: {scores.current}</span> <br />
            <span>high score: {scores.best}</span>
        </div>
    );
};

export default Score;
