import './App.css';
import React from "react";

//Componentes
import Mybutton from './components/Mybutton';
var numberOfClicks = 0;

function clickFunction () {
//do a lot of things
  numberOfClicks++;
//log something
  console.log("You clicked the button " + numberOfClicks + " times.");
}

function App() {

  return (
        <Mybutton Onclick={clickFunction}/>
  );
}
export default App;
