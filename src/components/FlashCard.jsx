import { useState } from 'react';

const FlashCard = ( { front, back, onMaster } ) => {

    const [isFlipped, setFlipped] = useState(false);

    const handleClick = () => {
        setFlipped(!isFlipped);
    }

    return (
        <div className='flashcard-container'>
            <div className="flashcard" onClick={handleClick}>
                <div className={`flashcard-inner ${isFlipped ? 'flipped' : ''}`}>
                    <div className='flashcard-front'>
                        <img src={front} />
                    </div>
                    <div className='flashcard-back'>
                        <p>{back}</p>
                    </div>
                </div>
                {/* onMaster prop is not passed in via MasteredGrid component, so it does not render */}
                {onMaster && <button onClick={onMaster}>Mastered</button>}
                {/* {isFlipped ? <p>{back}</p> : <img src={front} />} */}
            </div>
        </div>
    )
}

export default FlashCard;