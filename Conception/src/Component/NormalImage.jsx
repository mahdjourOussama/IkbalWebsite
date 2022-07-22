import React from "react";

function NormalImage(props) {
  return <img alt={props.alt} src={props.src} className={props.class} />;
}

export default NormalImage;
