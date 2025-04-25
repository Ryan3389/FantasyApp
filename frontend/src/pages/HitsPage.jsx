import { useState, useEffect} from "react";

function HitsPage(){
    const [hitCount, setHitCount ] = useState(2000)

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch(`/players/totalHits?hits=${encodeURIComponent(HitCount)}`)

                if(!response.ok){
                    throw new Error()
                }

                const data = await response.json()
                console.log(data)
            }

            catch (error) {
                console.error(error)
            }

        }

        fetchData()

    })
    return(
        <h1>Hits Page</h1>
    )
}

export default HitsPage