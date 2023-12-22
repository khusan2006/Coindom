import React from "react";
import "./currency.css";
import { ClipLoader } from "react-spinners";
import { formatNumber } from "../../utils/formatNumber";
const Currency = ({ currency, isLoading }) => {
  return (
    <div className="currency-item">
      {isLoading ? (
        <ClipLoader color="white" className="loader" />
      ) : (
        <>
          <img
            className="currency-img"
            src={currency.iconUrl}
            alt={currency.name}
          />
          <h2 className="currency-info">
            {currency.name}
            <span className={currency.change.includes("-") ? "red" : "green"}>
              {currency.change}%
            </span>
          </h2>
          <p className="currency-price">
            ${formatNumber(Number(currency.price))}
          </p>
        </>
      )}
    </div>
  );
};

export default Currency;
