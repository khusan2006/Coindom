import React from "react";
import "./join.css";
import bitcoin from "../../assets/bitcoin.png";
import ethereum from "../../assets/ethereum.png";

const Join = () => {
  return (
    <section id="join" className="join-section">

        <img
          src={bitcoin}
          alt="bitcoin"
          className="currency join-bitcoin-currency"
        />

      <img
        src={ethereum}
        alt="ethereum"
        className="currency  join-ethereum-currency"
      />
      <h4 className="join-title">
        Join us via <br /> <span>Discord</span>
      </h4>
      <p className="join-text">
        Invest and manage all your crypto at one place.
      </p>
      <a className="join-button" href="https://discord.com">
        Join via discord
      </a>
    </section>
  );
};

export default Join;
