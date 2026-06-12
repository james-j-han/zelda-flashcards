
const FlashCard = ( { front, back } ) => {
    return (
        <div className="flash-card">
            <p>{front}</p>
            <p>{back}</p>
        </div>
    )
}

export default FlashCard;