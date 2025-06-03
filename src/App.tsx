import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import FirstSection from "./component/header/main";
import SecondSection from "./component/abouutMe/main";
import ThirdSection from "./component/skills/main";
import FourthSection from "./component/skillsInDevelopment/main";

function App() {
  return (
    <div className="appContainer">
      {/* <Navbar /> */}
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      {/* <ContactUs /> */}
    </div>
  );
}

export default App;
