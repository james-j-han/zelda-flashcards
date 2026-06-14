import { useState } from 'react';

const FlashCard = ( { front, back } ) => {

    const [isFlipped, setFlipped] = useState(false);

    const handleClick = () => {
        setFlipped(!isFlipped);
    }

    return (
        <div className="flashcard" onClick={handleClick}>
            <div className={`flashcard-inner ${isFlipped ? 'flipped' : ''}`}>
                <div className='flashcard-front'>
                    <img src={front} />
                </div>
                <div className='flashcard-back'>
                    <p>{back}</p>
                </div>
            </div>
            {/* {isFlipped ? <p>{back}</p> : <img src={front} />} */}
        </div>
    )
}

export default FlashCard;