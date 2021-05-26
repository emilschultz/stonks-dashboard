import "./StockCard.css";
import { useEffect, useState } from "react";

export default function StockCard({ index = 0 }) {
  const [trendingStocks, setTrendingStocks] = useState([]);

  const apiKey = process.env.REACT_APP_RAPIDAPI_API_KEY;

  useEffect(() => {
    fetch(
      "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes?region=US&symbols=AMD%2CIBM%2CAAPL",
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
        setTrendingStocks(data.quoteResponse.result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  console.log("STOCKS:", trendingStocks);

  const trendingStockList = trendingStocks.map((stock) => {
    return (
      <div className="stock-card" key={stock.shortName}>
        <h2>{stock.symbol}</h2>
        <h5>{stock.shortName}</h5>
        <h3>
          {stock.postMarketPrice} {stock.currency}
        </h3>
      </div>
    );
  });

  return (
    <div className="stock-card" style={{ "--index": index }}>
      {trendingStockList}
    </div>
  );
}
