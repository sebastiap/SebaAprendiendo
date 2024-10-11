import './App.css';
import React from "react";

//Components
import Button from './components/Mybutton';
var numberOfClicks = 0;

function clickFunction () {
//do a lot of things
  numberOfClicks++;
//log something
  console.log("You clicked the button " + numberOfClicks + " times.");
}

function App() {

  return (
     <div>
        <Button whenClicked={clickFunction}/>
    </div>
  );
}
export default App;
