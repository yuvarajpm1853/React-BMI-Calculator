import { useState } from 'react'
import './App.css'
function App() {
  // variables used in input values must be empty string . Not null
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [bmi, setBmi] = useState(null)
  const [status, setStatus] = useState(null);
  const [error, setError] = useState("");

  const calculateBmi= ()=>{
    // using regluar expression to test its an number
    // together using an test fn 
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);

    if (isValidHeight && isValidWeight){
      const heightInMeters = height/100;
      const bmi = weight / (heightInMeters**2)
      setBmi(bmi.toFixed(2));
      if(bmi < 18.5)  setStatus("UnderWeight");
      else if (bmi >=18.5 && bmi <24.9) setStatus("Normal Weight");
      else if (bmi >=24.9 && bmi < 29.9)  setStatus("Overweight");
      else  setStatus("Obesity");
      setError("");
      }
    else {
      setBmi(null);
      setStatus(null);
      setError("Please enter an numeric values for height and weight.")
    }
  }
  const resetAll= ()=>  {
    setHeight("");
    setWeight("");
    setBmi(null);
    setStatus(null);
    setError("");
  }
  return (
   <>
   <div className="bmi-calculator">
    <div className="box"></div>
    <div className="data">
      <h2>BMI Calculator</h2>
      {error && <div className="error">{error}</div>}
      <div className="input-container">
        <label htmlFor="height">Height (cm) :</label>
        {/* cant use number type with input tag */}
        <input type="text" required id="height" 
        value={height} placeholder='170'
        onChange={e=> setHeight(e.target.value)} />
      </div>
      <div className="input-container">
        <label htmlFor="weight">Weight (kg) :</label>
        <input type="text" required id="weight" 
        value={weight} placeholder='60'
        onChange={e=> setWeight(e.target.value)}/>
      </div>
      <button onClick={calculateBmi}>Calcaulate BMI</button>
      <button onClick={resetAll}>Reset</button>
      {bmi && <div className="result">
        <p>Your BMI is : {bmi}</p>
        <p>Status : {status}</p>
      </div>
      }
    </div>
   </div>
   </>
  )
}

export default App
