function UserInput({handleInputChange, userInput}){
    

    return (
        <section id = "user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initial-investment">Initial Investment</label>
                    <input type="number" id = "initial-investment" value = {userInput.initialInvestment} required onChange = {(event) => handleInputChange('initialInvestment', event.target.value)}/>
                </p>
                <p>
                    <label htmlFor="annual-investment">Annual Investment</label>
                    <input type="number" id = "annual-investment" value = {userInput.annualInvement} required onChange = {(event) => handleInputChange('annualInvement', event.target.value)}/>
                </p>
                <p>
                    <label htmlFor="expected-returns">Expected Returns</label>
                    <input type="number" id = "expected-returns" value = {userInput.expectedReturns} required onChange = {(event) => handleInputChange('expectedReturns', event.target.value)}/>
                </p>
                <p>
                    <label htmlFor="duration">Duration</label>
                    <input type="number" id = "duration" value = {userInput.duration} required onChange = {(event) => handleInputChange('duration', event.target.value)}/>
                </p>
            </div>
        </section>
    )
}
export default UserInput;