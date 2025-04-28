import { useState, useEffect} from "react";
import Stats from "../components/Stats.jsx";

function HrPage(){
    // let dataLimit = 10
    const [ dataLimit, setDataLimit ] = useState(10)
    const [ homeRunCount, setHomeRunCount ] = useState(100)
    const [ playerStats, setPlayerStats ] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch(`/players/totalHomeRuns?homeRuns=${encodeURIComponent(homeRunCount)}`)

                if(!response.ok){
                    throw new Error()
                }
                const data = await response.json()
                const limitedData = data.slice(0, dataLimit)
                setPlayerStats(limitedData)
            }

            catch (error){
                console.error(error)
            }
        }
        fetchData()

    }, [dataLimit, homeRunCount]);


    const handleLoadMorePlayers = () => {
        setDataLimit(( prevState => prevState += 10))
    }

    const handleLoadFewerPlayers = () => {
        setDataLimit((prevState => prevState -= 10))
    }

    // Filter Buttons

    const view10OrMoreHR = () => {
        setHomeRunCount(100)
    }

    const view300OrMoreHR = () => {
        setHomeRunCount(300)
    }

    const view400OrMoreHR = () => {
        setHomeRunCount(400)
    }

    return (
        <>
            <button onClick={view10OrMoreHR}>100 Home Runs</button>
            <button onClick={view300OrMoreHR}>300 Home Runs</button>
            <button onClick={view400OrMoreHR}>400 Home Runs</button>
            <Stats
                stats={playerStats}
                clickHandler={handleLoadMorePlayers}
                clickHandlerFewerPlayers={handleLoadFewerPlayers}
            />
        </>

    )
}

export default HrPage
