import { useState } from 'react';

function AnswerForm({ back, correct, setCorrect }) {

    const [userAnswer, setUserAnswer] = useState('');
    const [hasSubmitted, setHasSubmitted] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        if (userAnswer === '') return;
        // basic trim white space and lowercase check
        const isCorrect = userAnswer.trim().toLocaleLowerCase() === back.trim().toLocaleLowerCase();
        setCorrect(isCorrect);
        setHasSubmitted(true);

        // clear input on submit
        setUserAnswer('');
    }

    function handleChange(e) {
        e.preventDefault();
        setUserAnswer(e.target.value);
    }

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