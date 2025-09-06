import React, { useEffect, useState } from "react";
import CountryCodeComponent from "../components/CountryCodeComponent";
import DomainComponent from "../components/DomainComponent";

function MainContainer() {
  let [chosenCall, setChosenCall] = useState("");

  const handleCallChoiceSubmit = (e) => {
    e.preventDefault();
    setChosenCall(e.target.value);
  };

  return (
    <div className="App">
      <div>
        What would you like to be able to do? This site handles a few types of
        Geography API calls.
      </div>
      <select value={chosenCall} onChange={(e) => handleCallChoiceSubmit(e)}>
        <option value="">----------Please choose an option----------</option>
        <option value="countrycode">Enter a country code</option>
        <option value="domain">Enter a top level domain for a country</option>
      </select>
      <br />
      <br />
      <br />
      <div>
        {chosenCall === "countrycode" ? (
          <CountryCodeComponent />
        ) : chosenCall === "domain" ? (
          <DomainComponent />
        ) : (
          <br />
        )}
      </div>
    </div>
  );
}

export default MainContainer;
