import { useState } from 'react';

const FlashCard = ( { front, back } ) => {

    const [isFlipped, setFlipped] = useState(false);

    const handleClick = () => {
        setFlipped(!isFlipped);
    }

    return (
        <div className="flashcard" onClick={handleClick}>
            {isFlipped ? <p>{back}</p> : <img src={front} />}
        </div>
    )
}

export default FlashCard;