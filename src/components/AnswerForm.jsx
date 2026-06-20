import { useState } from 'react';

function AnswerForm({ back, setCorrect }) {

    const [userAnswer, setUserAnswer] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        const isCorrect = userAnswer.trim().toLocaleLowerCase() === back.trim().toLocaleLowerCase();
        setCorrect(isCorrect);
        console.log(userAnswer);
        console.log(isCorrect);
    }

    return (
        <div className="answer-form">
            <form onSubmit={handleSubmit}>
                <input
                className='input-field'
                placeholder='Type your answer here'
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                />
            <button type='submit'>Check</button>
            </form>
        </div>
    )
}

export default AnswerForm;