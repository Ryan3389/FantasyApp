
function Stats({ stats,  clickHandler, clickHandlerFewerPlayers }){
    return(
        <section className="hr-section">
            <table className="content-table">
                <thead>
                <tr>
                    <th>Player</th>
                    <th>Years</th>
                    <th>Games</th>
                    <th>At Bats</th>
                    <th>Runs</th>
                    <th>Hits</th>
                    <th>Doubles</th>
                    <th>Triples</th>
                    <th>Home Runs</th>
                    <th>RBI</th>
                    <th>Walks</th>
                    <th>Strike Outs</th>
                    <th>Stolen Bases</th>
                    <th>Caught Stealing</th>
                    <th>Batting Average</th>
                    <th>Hall of Fame</th>
                </tr>
                </thead>

                <tbody>
                { stats.map((player, index) => (
                    <tr key={index}>
                        <td>{player.player}</td>
                        <td>{player.years}</td>
                        <td>{player.games}</td>
                        <td>{player.atBats}</td>
                        <td>{player.runs}</td>
                        <td>{player.hits}</td>
                        <td>{player.doubles}</td>
                        <td>{player.triples}</td>
                        <td>{player.homeRuns}</td>
                        <td>{player.rbi}</td>
                        <td>{player.baseOnBalls}</td>
                        <td>{player.strikeOuts}</td>
                        <td>{player.stolenBases}</td>
                        <td>{player.caughtStealing}</td>
                        <td>{player.battingAverage}</td>
                        <td>{player.hallOfFame}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <span className="filter-btn-container">
                 <button onClick={clickHandler}>Load More</button>
                <button onClick={clickHandlerFewerPlayers}>View Less</button>
            </span>
        </section>
    )
}



export default Stats