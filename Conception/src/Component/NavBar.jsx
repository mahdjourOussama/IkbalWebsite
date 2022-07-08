import React from "react";
import Button1 from "./Button1";
import Logo from "./Logo";
import Dk from "./Dk.PNG";
import "./style.css";
import NormalButton from "./NormalButton";
function NavBar() {
  return (
    <div className="Nav">
      <Logo alt="Somthing" src={Dk} text="Ikbel Center" />
      <div>
        <Button1 text="Home" />
        <Button1 text="Center" />
        <Button1 text="Media" />
        <Button1 text="About" />
        <NormalButton text="Log in" class="LoginIn" />
      </div>
    </div>
  );
}

export default NavBar;
