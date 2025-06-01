import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import FirstSection from "./component/FirstSection/main";
import SecondSection from "./component/SecondSection/main";
import ThirdSection from "./component/ThirdSection/main";
import FourthSection from "./component/FourthSection/main";

function App() {
  return (
    <React.Fragment>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </React.Fragment>
  );
}

export default App;
