
function Header({ cardCount, shuffle }) {
    return (
        <div className="header">
            <h1>Hyrule Monsters!</h1>
            <h4>Are you an expert? Test your knowledge!</h4>
            <p>Total cards in this set: {cardCount}</p>
            <p>Shuffle is {shuffle ? 'ON' : 'OFF'}</p>
            <br/>
        </div>
    )
}

export default Header;