import {useState, useEffect} from "react";
import Stats from "../components/Stats.jsx";
function HofPage(){
    const [ dataLimit, setDataLimit ] = useState(10)
    const [hallOfFame, setHallOfFame ] = useState(1)
    const [playerStats, setPlayerStats ] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch(`/players/hallOfFame?HOF=${encodeURIComponent(hallOfFame)}`)

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
    }, [dataLimit, hallOfFame]);

    // Load More + View Less Players
    const handleLoadMorePlayers = () => {
        setDataLimit(prevState => prevState += 10)
    }

    const handleLoadFewerPlayers = () => {
        setDataLimit(prevState => prevState -= 10)
    }

    // View players in / not in the HOF

    const handleViewHOF = () => {
        setHallOfFame(1)
    }

    const handleViewNotHOF = () => {
        setHallOfFame(0)
    }
    return (
        <>
            <button onClick={handleViewHOF}>Players in HOF</button>
            <button onClick={handleViewNotHOF}>Players not in HOF</button>

            <Stats
                stats={playerStats}
                clickHandler={handleLoadMorePlayers}
                clickHandlerFewerPlayers={handleLoadFewerPlayers}
            />
        </>

    )
}

export default HofPage