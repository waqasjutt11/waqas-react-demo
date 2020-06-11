import React, {useState} from "react";
import './Room.css';
import Temp from './Temp';
function Room() {
    let [isLit, setLit] = useState(true)
  return (
    <div className={`room ${isLit ? "ON" : "OFF"}`}>
         Room Light is {isLit? "ON": "OFF"}        <br />
        
        <button className="button1" onClick = {()=>{
          setLit(true);
          console.log("button clicked")
        } }> ON</button> 
        <button className="button2" onClick ={()=>{
          setLit(!isLit);
          console.log("flip light button clicked");
        }} > Flip the Light</button>
        <button className="button3" onClick = {()=>{
          setLit(false)}}>OFF</button>
        <br/>
        <Temp></Temp>
      <br/>
    </div>
  );
}
export default Room; 