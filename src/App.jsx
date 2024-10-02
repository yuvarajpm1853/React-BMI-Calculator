import './App.css'
function App() {
  
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
        <input type="number" required id="height"  />
      </div>
      <div className="input-container">
        <label htmlFor="weight">Weight (kg) :</label>
        <input type="number" required id="weight"  />
      </div>
      <button>Calcaulate BMI</button>
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
