import { useState, useEffect} from "react";

function HrPage(){
    const [homeRunCount, setHomeRunCount ] = useState(100)

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch(`/players/totalHomeRuns?homeRuns=${encodeURIComponent(homeRunCount)}`)

                if(!response.ok){
                    throw new Error()
                }
                const data = await response.json()
                console.log(data)
            }

            catch (error){
                console.error(error)
            }
        }
        fetchData()

    }, []);
    return (
        <h1>Home Runs</h1>
    )
}

export default HrPage
//  const response = await fetch(`/players/getAllPlayers`)