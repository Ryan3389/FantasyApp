import { useState, useEffect} from "react";
import Stats from "../components/Stats.jsx";

function HitsPage(){
    const [ dataLimit, setDataLimit ] = useState(10)
    const [hitCount, setHitCount ] = useState(2000)
    const [playerStats, setPlayerStats ] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch(`/players/totalHits?hits=${encodeURIComponent(hitCount)}`)

                if(!response.ok){
                    throw new Error()
                }

                const data = await response.json()
                const limitedData = data.slice(0, dataLimit)

                setPlayerStats(limitedData)
            }

            catch (error) {
                console.error(error)
            }

        }

        fetchData()

    }, [dataLimit, hitCount])

    const handleLoadMorePlayers = () => {
        setDataLimit(prevState => prevState += 10)
    }

    const handleLoadFewerPlayers = () => {
        setDataLimit(prevState => prevState -= 10)
    }

    // Filter Buttons
    const view1000PlusHits = () => {
        setHitCount(1000)
    }

    const view2000PlusHits = () => {
        setHitCount(2000)
    }

    const view4000PlusHits = () => {
        setHitCount(4000)
    }

    return(
        <>
            <button onClick={view1000PlusHits}>Players with 1000 Hits</button>
            <button onClick={view2000PlusHits}>Players with 2000 Hits</button>
            <button onClick={view4000PlusHits}>Players with 4000 Hits</button>

            <Stats
                stats={playerStats}
                clickHandler={handleLoadMorePlayers}
                clickHandlerFewerPlayers={handleLoadFewerPlayers}
            />
        </>
    )
}

export default HitsPage