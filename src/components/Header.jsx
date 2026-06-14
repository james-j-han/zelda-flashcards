
function Header({ cardCount }) {
    return (
        <div className="header">
            <h1>Hyrule Monsters!</h1>
            <h4>Are you an expert? Test your knowledge!</h4>
            <p>Total cards in this set: {cardCount}</p>
        </div>
    )
}

export default Header;