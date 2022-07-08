import React from "react";
import NormalButton from "./NormalButton";
import NormalImage from "./NormalImage";
import TextInH2 from "./TextInH2";
function Screen5() {
  return (
    <div className="Screen5">
      <TextInH2 text="Latest Post" />
      <div className="Screen5_Layout">
        <div>
          <NormalImage />
          <TextInH2 text="POST 1" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an Lorem
            Ipsum is simply dummy text of the printing and typesetting industry
          </p>
          <NormalButton text="Button?" class="ServicesLayout_Button" />
        </div>
        <div>
          <NormalImage />
          <TextInH2 text="POST 2" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an Lorem
            Ipsum is simply dummy text of the printing and typesetting industry
          </p>
          <NormalButton text="Button?" class="ServicesLayout_Button" />
        </div>
        <div>
          <NormalImage />
          <TextInH2 text="POST 3" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an Lorem
            Ipsum is simply dummy text of the printing and typesetting industry
          </p>
          <NormalButton text="Button?" class="ServicesLayout_Button" />
        </div>
      </div>
    </div>
  );
}

export default Screen5;
