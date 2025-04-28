import { useState, useEffect} from "react";
import Stats from "../components/Stats.jsx";
function YearsPage(){
    const [dataLimit, setDataLimit] = useState(10)
    const [ totalYears, setTotalYears ] = useState(10)
    const [playerStats, setPlayerStats ] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch(`/players/totalYears?years=${encodeURIComponent(totalYears)}`)

                if(!response.ok){
                    throw new Error()
                }

                const data = await response.json()
                const limitedData = data.slice(0, dataLimit)

                setPlayerStats(limitedData)
                console.log(data)
            }
         catch (error){
                console.error(error)
         }

        }
        fetchData()

    }, [dataLimit]);

    const handleLoadMorePlayers = () => {
        setDataLimit(prevState => prevState += 10)
    }

    const handleLoadFewerPlayers = () => {
        setDataLimit(prevState => prevState -= 10)
    }


    return (
        <>
            <Stats
                stats={playerStats}
                clickHandler={handleLoadMorePlayers}
                clickHandlerFewerPlayers={handleLoadFewerPlayers}

            />
        </>

    )

}

export default YearsPage