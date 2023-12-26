import React from "react";
import useCurrency from "../../hooks/useCurrency";
import { useParams } from "react-router-dom";
import { formatNumber } from "../../utils/formatNumber";
import "./infoPage.css";
import useWikipedia from "../../hooks/useWikipedia";
import { ClipLoader } from "react-spinners";
const InfoPage = () => {
  const { name } = useParams();

  const { currencies } = useCurrency(50);
  const data = currencies?.find(currency => currency.name === name);
  const { sentence } = useWikipedia(data?.name);
  console.log(sentence);
  return data ? (
    <section className="data-section">
      <div className="data-left">
        <img className="data-img" src={data.iconUrl} alt={data.name} />
        <h3 className="data-name">{data.name}</h3>
        <p className="data-rank">Rank: #{data.rank}</p>
      </div>
      <div className="data-right">
        <div className="data-top">
          <p>
            24h Change:{" "}
            <span className={data.change.includes("-") ? "red" : "green"}>
              %{data.change}
            </span>
          </p>
          <p>
            price:{" "}
            <span className={data.change.includes("-") ? "red" : "green"}>
              ${formatNumber(Number(data.price))}
            </span>
          </p>
          <p>
            symbol: <span>{data.symbol}</span>
          </p>
        </div>
        <div>{/* {sentence} */}</div>
      </div>
    </section>
  ) : (
    <div className="spinner-container">
      <ClipLoader
        color={"#fff"}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default InfoPage;
