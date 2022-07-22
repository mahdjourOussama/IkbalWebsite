import React from "react";
import NormalImage from "./NormalImage";
import TextInH2 from "./TextInH2";
import Image from "./Dk.PNG";
import NormalButton from "./NormalButton";
function Screen3() {
  return (
    <div className="Screen3">
      <TextInH2 text="Services" class="Screen3_Text" />
      <div className="ServicesLayout">
        <div>
          <NormalImage alt="Something" src={Image} class="ServicesImage" />
          <p>skdks skdkdsk ksdkks ksdkksd</p>
        </div>
        <div>
          <NormalImage alt="Something" src={Image} class="ServicesImage" />
          <p>skdks skdkdsk ksdkks ksdkksd</p>
        </div>
        <div>
          <NormalImage alt="Something" src={Image} class="ServicesImage" />
          <p>skdks skdkdsk ksdkks ksdkksd</p>
        </div>
        <div>
          <NormalImage alt="Something" src={Image} class="ServicesImage" />
          <p>skdks skdkdsk ksdkks ksdkksd</p>
        </div>
        <div>
          <NormalImage alt="Something" src={Image} class="ServicesImage" />
          <p>skdks skdkdsk ksdkks ksdkksd</p>
        </div>
        <div>
          <NormalButton
            text="See More Services"
            class="ServicesLayout_Button"
          />
        </div>
      </div>
    </div>
  );
}

export default Screen3;
