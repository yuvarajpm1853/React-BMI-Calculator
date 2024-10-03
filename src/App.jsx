import { useState } from 'react'
import './App.css'
function App() {
  // variables used in input values must be empty string . Not null
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [bmi, setBmi] = useState(null)
  const [status, setStatus] = useState(null);

  const calculateBmi= ()=>{
    if (height && weight){
      const heightInMeters = height/100;
      const bmi = weight / (heightInMeters**2)
      setBmi(bmi.toFixed(2));
      if(bmi < 18.5)  setStatus("UnderWeight");
      else if (bmi >=18.5 && bmi <24.9) setStatus("Normal Weight");
      else if (bmi >=24.9 && bmi < 29.9)  setStatus("Overweight");
      else  setStatus("Obesity");
      }
    else {
      setBmi(null);
      setStatus(null);
    }
  }
  return (
   <>
   <div className="bmi-calculator">
    <div className="box"></div>
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
