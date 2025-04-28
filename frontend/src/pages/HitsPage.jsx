import { useState, useEffect} from "react";
import Stats from "../components/Stats.jsx";

function HitsPage(){
    const dataLimit = 4
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

    })
    return(
        <Stats
            stats={playerStats}
        />
    )
}

export default HitsPage