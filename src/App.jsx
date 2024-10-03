import { useState } from 'react'
import './App.css'
function App() {
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [bmi, setBmi] = useState(null)
  const [status, setStatus] = useState(null);

  const calculateBmi= ()=>{
    console.log(height,weight);
  }
  return (
   <>
   <div className="bmi-calculator">
    <div className="box">
      <div className="img1"></div>
    </div>
    <div className="data">
      <h2>BMI Calculator</h2>
      <div className="input-container">
        <label htmlFor="height">Height (cm) :</label>
        <input type="number" required id="height" value={height}
        onChange={e=> setHeight(e.target.value)} />
      </div>
      <div className="input-container">
        <label htmlFor="weight">Weight (kg) :</label>
        <input type="number" required id="weight" value={weight}
        onChange={e=> setWeight(e.target.value)}/>
      </div>
      <button onClick={calculateBmi}>Calcaulate BMI</button>
      <div className="result">
        <p>Your BMI is : 28.8</p>
        <p>Status : Overweight</p>
      </div>
    </div>
   </div>
   </>
  )
}

export default App
