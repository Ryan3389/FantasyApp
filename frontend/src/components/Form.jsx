function Form({ fields, handleChange, handleFormSubmit }) {
    //Step 3
    return (
        <section className="form-section">
            <form onSubmit={handleFormSubmit}>
                <h2>Make a Prediction</h2>
                {fields.map((field, index) => (
                    <div key={index} className="input-container">
                            <label htmlFor={field.name}>{field.label}</label>
                            <input
                                type={field.type}
                                name={field.name}
                                id={field.name}
                                placeholder={field.placeholder}
                                onChange={handleChange}
                                value={FormData[field.name]}
                                className="stats-input"
                            />
                    </div>
                ))}
                <input type="submit" />
            </form>
        </section>

    )
}

export default Form