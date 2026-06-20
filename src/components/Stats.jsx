

function Stats({ currentStreak, longestStreak }) {
    return (
        <div className="stats-container">
            <p>Current Streak: {currentStreak}</p>
            <p>Longest Streak: {longestStreak}</p>
        </div>
    )
}

export default Stats;