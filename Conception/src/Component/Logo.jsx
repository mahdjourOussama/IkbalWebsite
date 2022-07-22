import React from "react";
import { ImageStyle } from "../Styled Component/NavBarStyle";
import "./style.css";
function Logo(props) {
  return (
    <div className="Log">
      <ImageStyle alt={props.alt} src={props.src} />
      <h2>{props.text}</h2>
    </div>
  );
}

export default Logo;
