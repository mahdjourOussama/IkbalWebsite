import React from "react";
import Dk from "./Dk.PNG";
import NormalImage from "./NormalImage";
import "./style.css";
import TextInH2 from "./TextInH2";
import NormalButton from "./NormalButton";
function Screen2() {
  return (
    <div className="Screen2">
      <NormalImage src={Dk} alt="euh u know" class="image" />
      <div className="Screen2_2sd">
        <TextInH2 text="ABOUT IKBEL" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s,
        </p>
        <NormalButton class="Screen2_2sd_Button" text="Full Profile" />
      </div>
    </div>
  );
}

export default Screen2;
