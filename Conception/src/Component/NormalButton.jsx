import React from "react";

function NormalButton(props) {
  return <button className={props.class}>{props.text}</button>;
}

export default NormalButton;
