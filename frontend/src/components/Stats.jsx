function Stats({ player, years, games, atBats, runs, hits, doubles, triples, homeRuns, rbi, baseOnBalls, strikeOuts, stolenBases, caughtStealing, battingAverage, hallOfFame}){
    return(
        <section>
            <article className="table-container">
                <div className="table-names">
                    <div>
                        <p className="heading-bold">Player</p>
                        {/*<p>{player}</p>*/}
                    </div>
                    <div>
                        <p className="heading-bold">Years</p>
                        {/*<p>{years}</p>*/}
                    </div>
                    <div>
                        <p className="heading-bold">Games</p>
                        {/*<p>{games}</p>*/}
                    </div>
                    <div>
                        <p className="heading-bold">At Bats</p>
                        {/*<p>{atBats}</p>*/}
                    </div>
                    <div>
                        <p className="heading-bold">Runs</p>
                        {/*<p>{runs}</p>*/}
                    </div>
                    <div>
                        <p className="heading-bold">Hits</p>
                        {/*<p>{hits}</p>*/}
                    </div>
                    <div>
                        <p className="heading-bold">Doubles</p>
                        {/*<p>{doubles}</p>*/}
                    </div>
                    <div>
                        <p className="heading-bold">Triples</p>
                        {/*<p>{triples}</p>*/}
                    </div>
                    <div>
                        <p className="heading-bold">Home Runs</p>
                        {/*<p>{homeRuns}</p>*/}
                    </div>
                    <div>
                        <p className="heading-bold">RBI</p>
                        {/*<p>{rbi}</p>*/}
                    </div>
                    <div>
                        <p className="heading-bold">Walks</p>
                        {/*<p>{baseOnBalls}</p>*/}
                    </div>
                    <div>
                        <p className="heading-bold">Strike Outs</p>
                        {/*<p>{strikeOuts}</p>*/}
                    </div>
                    <div>
                        <p className="heading-bold">Stolen Bases</p>
                        {/*<p>{stolenBases}</p>*/}
                    </div>
                    <div>
                        <p className="heading-bold">Caught Stealing</p>
                        {/*<p>{caughtStealing}</p>*/}
                    </div>
                    <div>
                        <p className="heading-bold">Batting Average</p>
                        {/*<p>{battingAverage}</p>*/}
                    </div>
                    <div>
                        <p className="heading-bold">Hall of Fame</p>
                        {/*<p>{hallOfFame}</p>*/}
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Stats