import React, {useState} from "react";
import './Room.css';
function Temp() {
    let [Temp, setTemp] = useState(23)
  return (
      <div className="temp">
          Current Room temperature is <strong className="strong">{Temp} C </strong>.
          
        <button className="button4" onClick = {() => {
          console.log("Increasing tempereture button clicked");
          setTemp(++Temp);}}> + </button>
          <button className="button5" onClick = {()=> {
            console.log("decreasing room temperature is clicked");
            setTemp(--Temp);}}> - </button>
        <br/>
      <br/>
    </div>
  );
}
export default Temp; 