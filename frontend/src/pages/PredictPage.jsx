import { useState} from "react";
import Form from "../components/Form.jsx";

function PredictPage() {
    const [formState, setFormState] = useState({
        YRS: null,
        G: null,
        H: null,
        doubles: null,
        HR: null,
        RBI: null,
        BA: null

    })

    const [ pageLayout, setPageLayout ] = useState("form")
    const [ predictionResults, setPredictionResults ] = useState(null)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch('/api/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formState)
            })
            if (!response.ok) {
                throw new Error("Failed to submit form")
            }

            const data = await response.json()
            console.log(data)
            setPredictionResults(data)
            setPageLayout("results")

        } catch (error) {
            console.log(error)
        }
    }

    const handleNewPrediction = () => {
        setPageLayout("form")
    }

    const fields = [
        { name: "YRS", type: "text", label: "Years", placeholder: "24" },
        { name: "G", type: "text", label: "Games", placeholder: "162" },
        { name: "H", type: "text", label: "hits", placeholder: "1000" },
        { name: "doubles", type: "text", label: "Doubles", placeholder: "162" },
        { name: "HR", type: "text", label: "Home Runs", placeholder: "24" },
        { name: "RBI", type: "text", label: "RBI", placeholder: "162" },
        { name: "BA", type: "text", label: "Batting Average", placeholder: "162" },
    ]

    return(
        <section className="form-section">
            {pageLayout === "form" ?
                <Form
                    fields={fields}
                    formData={formState}
                    handleChange={handleChange}
                    handleFormSubmit={handleFormSubmit}
                /> :
                <section className="results-section">
                   <h1>Prediction</h1>
                    <p>{predictionResults}</p>
                    <button onClick={handleNewPrediction} className="new-prediction-btn">New Prediction</button>
                </section>}
            {/*<Form*/}
            {/*    fields={fields}*/}
            {/*    formData={formState}*/}
            {/*    handleChange={handleChange}*/}
            {/*    handleFormSubmit={handleFormSubmit}*/}
            {/*/>*/}
        </section>
    )
}

export default PredictPage