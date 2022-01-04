import '../index.css';

const Score = () => {
    return (
        <div>
            <h2 style={{ textDecoration: 'underline' }}>board score</h2>
            <p style={{ fontWeight: 'bold' }}>
                <span>current-score: 2</span> <br />
                <span>best-score: 3</span>
            </p>
        </div>
    );
};

export default Score;
