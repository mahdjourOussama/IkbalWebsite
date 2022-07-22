import React from "react";
import Screen1 from "../Component/Screen1";
import NavBar from "../Component/NavBar";
import Screen2 from "../Component/Screen2";
import Screen3 from "../Component/Screen3";
/* import Screen4 from "../Component/Screen4"; */
import Screen5 from "../Component/Screen5";
import "../Component/style.css";
function Home() {
  return (
    <div className="body">
      <NavBar />
      <Screen1 />
      <Screen2 />
      <Screen3 />
      {/* <Screen4 /> */}
      <Screen5 />
    </div>
  );
}

export default Home;
