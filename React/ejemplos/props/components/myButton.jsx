import React from "react";

function myButton(props) {

     return (
      <button onClick={props.onClick}>
          'I am a button'
      </button>
  );
}

export default myButton;
