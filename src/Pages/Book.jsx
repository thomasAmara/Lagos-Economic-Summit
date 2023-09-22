import React from "react";
import "../Styles/BookNow.css";

export default function Book() {
  const profile = [
    {
      name: "Early Bird Ticket",
      price: "500",
    },
    {
      name: "Early Bird Ticket",
      price: "500",
    },
    {
      name: "Early Bird Ticket",
      price: "500",
    },
  ];

  return (
    <div className="bookContainer">
      <div className="backgroundImage">
        <text
          style={{
            fontSize: "70px",
            fontWeight: "900",
          }}
        >
          LCS 2023
        </text>
        <text fontWeight="500" fontSize="48px">
          Lagos Climate Summit
        </text>
      </div>
      <div className="topContainer">
        {profile.map((item, index) => (
          <div className="profileContainer" key={index}>
            <div className="profileHeader">{item.name}</div>
            <div className="detailsContainer">
              <div>{item.price}</div>
              <div>Exclude Vat</div>
              <div className="buttonContainer">
                <button className="bookButton">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="midContainer"></div>
    </div>
  );
}
