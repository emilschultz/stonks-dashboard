import "./RandomStock.css";

import { useState, useEffect } from "react";

export default function RandomStock() {
  const [randomStockData, setRandomStockData] = useState([]);

  const apiKey = process.env.REACT_APP_RAPIDAPI_API_KEY;

  useEffect(() => {
    fetch(
      "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-trending-tickers?region=US",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": `${apiKey}`,
          "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRandomStockData([data.finance.result[0].quotes[0]]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log("random stock:", randomStockData);

  const todaysStonk = randomStockData.map((data) => {
    return (
      <>
        <div className="random-stock-card__title__container">
          <h2 className="random-stock-card__title">{data.symbol}</h2>
          <span>{data.shortName}</span>
        </div>
        <div className="random-stock-card">
          <p>Market price {data.regularMarketPrice}</p>
          <p>
            {Math.floor(`${data.regularMarketChangePercent}` * 100) / 100} %
          </p>
          <p>{data.quoteType}</p>
        </div>
      </>
    );
  });

  return <>{todaysStonk}</>;
}
