import { useState, useEffect} from "react";

function YearsPage(){
    const [ totalYears, setTotalYears ] = useState(2000)

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch(`/players/totalYears?years=${encodeURIComponent(totalYears)}`)

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
        <h1>Years Page</h1>
    )

}

export default YearsPage