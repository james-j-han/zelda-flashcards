import { useState } from 'react';

const FlashCard = ( { front, back } ) => {

    const [isFlipped, setFlipped] = useState(false);

    const handleClick = () => {
        setFlipped(!isFlipped);
    }

    return (
        <div className="flashcard" onClick={handleClick}>
            {isFlipped ? <img src={front} /> : <p>{back}</p>}
        </div>
    )
}

export default FlashCard;