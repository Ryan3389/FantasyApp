import { useState, useEffect} from "react";
import Stats from "../components/Stats.jsx";
function YearsPage(){
    const dataLimit = 4
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

    }, []);

    return (
       <Stats
           stats={playerStats}
       />
    )

}

export default YearsPage