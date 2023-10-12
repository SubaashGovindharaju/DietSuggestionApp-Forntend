// import { useState } from "react";
// import './Hero.css'
// // const Hero =()=>{
// // return(
// // <div>
// //     HERO
// // </div>

// // )
// // }

// function Hero() {
//   const [age, setAge] = useState("");
//   const [height, setHeight] = useState("");
//   const [weight, setWeight] = useState("");
//   const [bmi, setBMI] = useState("");
//   const [caloriesForGain, setCaloriesForGain] = useState("");
//   const [caloriesForLoss, setCaloriesForLoss] = useState("");

//   const calculateBMI = () => {
//     const heightInMeters = height / 100;
//     const bmiResult = (weight / (heightInMeters * heightInMeters)).toFixed(2);
//     setBMI(bmiResult);

//     // Calculate calories for weight gain and loss (example formulas)
//     const basalMetabolicRate = 10 * weight + 6.25 * height - 5 * age + 5;
//     const caloriesForGain = basalMetabolicRate * 1.2; // Example: Increase by 20%
//     const caloriesForLoss = basalMetabolicRate * 0.8; // Example: Decrease by 20%
//     setCaloriesForGain(caloriesForGain.toFixed(0));
//     setCaloriesForLoss(caloriesForLoss.toFixed(0));
//   };

//   return (

//         <div className="p-4">
//           <h2 className="text-2xl mb-4">BMI Calculator</h2>
//           <input
//             type="number"
//             placeholder="Age (years)"
//             className="w-full border border-gray-300 rounded-md p-2 mb-2"
//             value={age}
//             onChange={(e) => setAge(e.target.value)}
//           />
//           <input
//             type="number"
//             placeholder="Height (cm)"
//             className="w-full border border-gray-300 rounded-md p-2 mb-2"
//             value={height}
//             onChange={(e) => setHeight(e.target.value)}
//           />
//           <input
//             type="number"
//             placeholder="Weight (kg)"
//             className="w-full border border-gray-300 rounded-md p-2 mb-2"
//             value={weight}
//             onChange={(e) => setWeight(e.target.value)}
//           />
//           <button
//             onClick={calculateBMI}
//             className="bg-blue-500 text-white rounded-md p-2 w-full hover:bg-blue-600"
//           >
//             Calculate
//           </button>
//           <p className="mt-4">BMI: {bmi}</p>
//           <p>Calories for Weight Gain: {caloriesForGain}</p>
//           <p>Calories for Weight Loss: {caloriesForLoss}</p>

//           <div className="container">
//     <h2 style="text-align: center;">BMI Calculator</h2>
//     <form>
//         <p className="inputs">
//             <label>Height (CM): </label>
//             <input type="number" id="height" min="1"/>
//         </p>
//         <p className="inputs">
//             <label>Weight (KG): </label>
//             <input type="number" id="weight" min="1"/>
//         </p>

//         <button className="calcBtn">Calculate</button>
//         <div style="margin-top: 20px;">Your BMI is: <p id="results"></p>
//         </div>
//         <p id="message"></p>

//     </form>
// </div>

//         </div>

//       );
//     }

// export default Hero;

// import  { useState } from 'react';
// import './Hero.css'; // Import your CSS file

// function Hero() {
//   const [height, setHeight] = useState('');
//   const [weight, setWeight] = useState('');
//   const [results, setResults] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
//       setResults('Please provide valid values for height and weight');
//       setMessage('');
//       return;
//     }

//     // Calculate BMI
//     const bmi = (weight / ((height * height) / 10000)).toFixed(2);

//     // Display the results
//     setResults(bmi);

//     // Display End Message
//     if (bmi < 18.6) {
//       setMessage('You are underweight');
//     } else if (bmi >= 18.6 && bmi <= 24.9) {
//       setMessage('Normal');
//     } else {
//       setMessage('You are overweight');
//     }
//   };

//   return (
//     <div className="container">
//       <h2 style={{ textAlign: 'center' }}>BMI Calculator</h2>
//       <form onSubmit={handleSubmit}>
//         <p className="inputs">
//           <label>Height (CM): </label>
//           <input
//             type="number"
//             id="height"
//             min="1"
//             value={height}
//             onChange={(e) => setHeight(e.target.value)}
//           />
//         </p>
//         <p className="inputs">
//           <label>Weight (KG): </label>
//           <input
//             type="number"
//             id="weight"
//             min="1"
//             value={weight}
//             onChange={(e) => setWeight(e.target.value)}
//           />
//         </p>

//         <button className="calcBtn" type="submit">
//           Calculate
//         </button>
//         <div style={{ marginTop: '20px' }}>
//           Your BMI is: <p id="results">{results}</p>
//         </div>
//         <p id="message">{message}</p>
//       </form>
//     </div>
//   );
// }

// export default Hero;

// import { useState } from "react";
// import "./Hero.css"; // Import your CSS file

// function Hero({ onBMICalculated }) {
//   const [height, setHeight] = useState("");
//   const [weight, setWeight] = useState("");
//   const [age, setAge] = useState("");
//   const [bmi, setBMI] = useState("");
//   const [caloriesToGain, setCaloriesToGain] = useState("");
//   const [caloriesToLose, setCaloriesToLose] = useState("");

//   const calculateBMI = () => {
//     if (!height || !weight || !age) {
//       return;
//     }

//     const heightInMeters = height / 100;
//     const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
//     setBMI(bmiValue);

//     // Calculate Basal Metabolic Rate (BMR) using the Harris-Benedict equation
//     const bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;

//     // Calculate calories needed for weight gain and loss (±500 Kcal)
//     setCaloriesToGain(Math.round(bmr + 500));
//     setCaloriesToLose(Math.round(bmr - 500));

//     // Call the callback function with the BMI value
//     onBMICalculated(bmiValue);
//   };

//   return (
//     <div className="outbox">
//       <div className="container">
//         <h2 className="heading" style={{ textAlign: "center" }}>BMI Calculator</h2>
//         <form>
//           <p className="inputs">
//             <label className="label">Height (CM): </label>
//             <input
//               type="number"
//               id="height"
//               min="1"
//               value={height}
//               onChange={(e) => setHeight(e.target.value)}
//             />
//           </p>
//           <p className="inputs">
//             <label>Weight (KG): </label>
//             <input
//               type="number"
//               id="weight"
//               min="1"
//               value={weight}
//               onChange={(e) => setWeight(e.target.value)}
//             />
//           </p>
//           <p className="inputs">
//             <label>Age: </label>
//             <input
//               type="number"
//               id="age"
//               min="1"
//               value={age}
//               onChange={(e) => setAge(e.target.value)}
//             />
//           </p>

//           <button className="calcBtn" type="button" onClick={calculateBMI}>
//             Calculate
//           </button>
//           <div style={{ marginTop: "20px" }}>
//             <p>Your BMI is: {bmi}</p>
//             <p>Calories for Weight Gain: {caloriesToGain} Kcal/day</p>
//             <p>Calories for Weight Loss: {caloriesToLose} Kcal/day</p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Hero;

import { useState } from "react";
import styles from "./Hero.module.css"; // Import your CSS file for styling

const Hero = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [age, setAge] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [caloriesForWeightGain, setCaloriesForWeightGain] = useState(0);
  const [caloriesForWeightLoss, setCaloriesForWeightLoss] = useState(0);

  const calculateBMI = () => {
    // BMI calculation
    const bmiValue = (weight / Math.pow(height / 100, 2)).toFixed(2);
    setBmi(bmiValue);

    // Calculate calories for weight gain and loss (you can use any formula here)

    const bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    setCaloriesForWeightGain(Math.round(bmr + 500));
    setCaloriesForWeightLoss(Math.round(bmr - 500));
  };

  const getBmiRangeColor = (bmi) => {
    if (bmi < 18.5) return "Underweight";
    if (bmi >= 18.5 && bmi < 24.9) return "Normal Weight";
    if (bmi >= 25 && bmi < 29.9) return "Overweight";
    return "Obese";
  };

  const bmiRangeColor = getBmiRangeColor(bmi);

  const handleCalculateClick = () => {
    calculateBMI();
  };

  return (
    <div className={styles.outbox}>
      <div className={styles.container}>
        <h1 className={styles.heading}>BMI Calculator</h1>
        <div className={styles.button}>
          <div>
            <label>Height (cm):</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <label>Weight (kg):</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Age:</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button onClick={handleCalculateClick}>Calculate BMI</button>
        </div>
        <div className={styles.button}>
          <p>BMI: {bmi}</p>
          <p>Calories for Weight Gain: {caloriesForWeightGain} Kcal/day</p>
          <p>Calories for Weight Loss: {caloriesForWeightLoss}  Kcal/day</p>
        </div>
        <div className={styles.button}>
          <p>BMI Range: {bmiRangeColor}</p>
          <div className={`bmi-range-color ${bmiRangeColor.toLowerCase()}`} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
