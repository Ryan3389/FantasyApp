async function getData(){
    const response = await fetch("/players/getAllPlayers")
    if(!response.ok){
        console.log("bad request")
    }

    const data = await response.json()

    console.log(data)
}

getData()
