import '../index.css';

const Score = ({ scores }) => {
    return (
        <div>
            <h2 style={{ textDecoration: 'underline' }}>board score</h2>
            <p style={{ fontWeight: 'bold' }}>
                <span>current-score: {scores.current}</span> <br />
                <span>best-score: {scores.best}</span>
            </p>
        </div>
    );
};

export default Score;
