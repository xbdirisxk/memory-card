import '../index.css';

const Score = ({ scores }) => {
    return (
        <div className='scores'>
            <span>Score: {scores.current}</span> <br />
            <span>Best Score: {scores.best}</span>
        </div>
    );
};

export default Score;
