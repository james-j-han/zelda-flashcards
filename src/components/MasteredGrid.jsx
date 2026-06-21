import FlashCard from './FlashCard';

function MasteredGrid({ cards }) {

    // empty mastered grid to start
    if (cards.length === 0) return null;

    return (
        <div className="mastered-grid">
            <h2>Mastered: {cards.length}</h2>
            <div className="mastered-grid-items">
                {cards.map(card => (
                    <FlashCard
                        key={card.id}
                        front={card.front}
                        back={card.back}
                    />))}
            </div>
        </div>
    );
}

export default MasteredGrid;