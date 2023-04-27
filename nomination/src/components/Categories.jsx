import React from "react";
import Motion from "./Motion";
import WebApp from "./WebApp";
import SmartTech from "./SmartTech";
import Reality from "./Reality";

const Categories = () => {
  return (
    <div className="categories">
      <h1>The EHB Categories</h1>

      <div className="webApp">
        <h2>Web & App</h2>
        <WebApp />
      </div>

      <div className="extended-reality">
        <h2>Extended Reality</h2>
        <Reality />
      </div>

      <div className="Motion">
        <h2>Motion</h2>
        <Motion />
      </div>

      <div className="smart-technologies">
        <h2>Smart Technologies</h2>
        <SmartTech />
      </div>
    </div>
  );
};

export default Categories;
