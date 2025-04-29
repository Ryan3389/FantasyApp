// import {useState, useEffect} from "react";
//
// function HomePage(){
//     const [ predictStats, setPredictStats ] = useState({
//         YRS: 24,
//         G: 1000,
//         H: 2000,
//         doubles: 300,
//         HR: 300,
//         RBI: 200,
//         BA: 0.300
//     })
//     useEffect(() => {
//         const fetchData = async() => {
//             try{
//                 const response = await fetch("/players/predict", {
//                     method: "POST",
//                     headers: { "Content-Type": "application/json" },
//                     body: JSON.stringify(predictStats),
//                 });
//                 if(!response.ok){
//                     throw new Error()
//                 }
//
//                 const data = await response.json()
//                 console.log(data)
//             }
//
//             catch (error) {
//                 console.error(error)
//             }
//
//         }
//         fetchData()
//     }, [])
//     return(
//         <section className="hero-section">
//             <article className="hero-article">
//                 <h1>Welcome to <br/> Fantasy Baseball Zone</h1>
//                 <p>Your home to everything baseball related</p>
//             </article>
//         </section>
//     )
// }

function HomePage(){
    return(
        <section className="hero-section">
            <article className="hero-article">
                <h1>Welcome to <br/> Fantasy Baseball Zone</h1>
                <p>Your home to everything baseball related</p>
            </article>
        </section>
    )
}


export default HomePage
