import { useState } from 'react'
import Header from './components/Header.jsx'
import UserInput from './components/UserInput.jsx';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvement: 1200,
    expectedReturns: 6,
    duration: 10
  });

  function handleInputChange(inputIdentifier, value){
    setUserInput(prevInput => {
      return {
        ...prevInput,
        [inputIdentifier]: value
      }
    })
  }

  return (
    <>
      <Header />
      <UserInput handleInputChange={handleInputChange} userInput={userInput}/>
    </>
  );
}

export default App;
