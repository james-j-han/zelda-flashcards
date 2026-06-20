import { useState, useEffect } from 'react';

function AnswerForm({ back, currentStreak, setCurrentStreak, longestStreak, setLongestStreak, correct, setCorrect }) {

    const [userAnswer, setUserAnswer] = useState('');
    const [hasSubmitted, setHasSubmitted] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        if (userAnswer === '') return;
        // basic trim white space and lowercase check
        const isCorrect = userAnswer.trim().toLocaleLowerCase() === back.trim().toLocaleLowerCase();
        setCorrect(isCorrect);

        // increment or reset currentStreak and/or longestStreak
        if (isCorrect) {
            // setCounter(counter + 1);
            const streak = currentStreak + 1;
            setCurrentStreak(streak);

            if (streak > longestStreak) {
                setLongestStreak(streak);
            }
        } else {
            setCurrentStreak(0);
        }
        // isCorrect ? setCounter(counter + 1) : setCounter(0);
        setHasSubmitted(true);

        // clear input on submit
        setUserAnswer('');
    }

    function handleChange(e) {
        e.preventDefault();
        setUserAnswer(e.target.value);
    }

    // set setHasSubmitted back to false on each new card
    useEffect(() => {
        setHasSubmitted(false);
    }, [back]);

    return (
        <div className="answer-form">
            <form onSubmit={handleSubmit}>
                <input
                className='input-field'
                placeholder='Type your answer here'
                type="text"
                value={userAnswer}
                onChange={handleChange}
                />
            <button type='submit'>Check</button>
            </form>
            <img className={`visual-feedback ${hasSubmitted ? 'visible' : 'hidden'}`} src={correct ? '/images/correct.png' : '/images/incorrect.png'} />
        </div>
    )
}

export default AnswerForm;