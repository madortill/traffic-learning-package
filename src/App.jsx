import React from "react";
import { useState } from "react";
import "./css/App.css";
import bahad13Logo from "./assets/logo.png";
import tillLogo from "./assets/till_bluelogo.svg";
import circlesBottom from "./assets/circles-bottom.svg";
import circlesTop from "./assets/circlesTop.svg";

import Card from "./components/Cards/Cards";
import card1Image from "./assets/card1-2.png";
import card2Image from "./assets/card2-3.png";

function App() {
  return (
    <>
      <div className="app">
        <img src={bahad13Logo} className="logo-bahad13" alt="logo" />
        <img src={tillLogo} className="till-logo" alt="till" />
        <img
          src={circlesBottom}
          className="circle circlesBottom"
          alt="circle"
        />
        <img src={circlesTop} className="circle circlesTop" alt="circle" />

        <p className="header-open">מארז לומדות תעבורה</p>
        <p className="p-open">בחרו את הלומדה שברצונכם ללמוד</p>

        <div className="cards-container">
          <Card
            card="1"
            image={card1Image}
            title="לומדת תעבורה"
            description="זיהוי רכבים וסוגי נסיעות, אופן עצירת רכבים והכוונות תנועה"
            buttonText="להתחלת הלומדה >"
            buttonColor="#992045"
            // onClick={() => console.log("card 1")}
            onClick={() => window.location.href = "https://madortill.github.io/lomdat-principles/"}
          />

          <Card
            card="2"
            image={card2Image}
            title="לומדת דו''חות תעבורה"
            description='דו"ח ביד"צ, דו"ח דמ"ש'
            buttonText="להתחלת הלומדה >"
            buttonColor="#114687"
            // onClick={() => console.log("card 2")}
            onClick={() => window.location.href = "https://madortill.github.io/lomdat-traffic-reports/"}

          />
        </div>
      </div>
    </>
  );
}

export default App;
