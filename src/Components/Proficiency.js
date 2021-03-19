import React from "react";
import ProgressBar from "./ProgressBar";
import './Proficiency.css';

const testData = [
  { bgcolor: "#00695c", completed: 90 },
];

const testData1 = [
    { bgcolor: "#00695c", completed: 75 },
  ];

  const testData2 = [
    { bgcolor: "#00695c", completed: 70 },
  ];



function Proficiency() {
  return (
      <div className="proficiency">
          <h1>Proficiency</h1>
          <h3>Frontend/Design</h3>
    <div className="Design">
      {testData.map((item, idx) => (
        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
      ))}
    </div>
        <h3>Backend</h3>
        <div className="Backend">
            {testData1.map((item, idx) => (
          <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
            ))}
        </div>
        <h3>Programming</h3>
        <div className="Programming">
            {testData2.map((item, idx) => (
          <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
            ))}
        </div>

</div>
  );
}

export default Proficiency;