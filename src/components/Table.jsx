import React from "react";

const Table = ({ data }) => {
  return (
   <div className="table-container"> 
      <table>
        <thead>
          <tr>
            <th>Icon</th>
            <th>Symbol</th>
            <th>Name</th>
            <th>Id</th>
            <th>Current Price</th>
            <th>All Time High</th>
            <th>Market Cap</th>
            <th>Total Volume</th>
            <th>Price Change % 24 hour</th>
            <th>Total Supply</th>
            <th>Max Supply</th>
          </tr>
        </thead>
        <tbody>
          {data.map((coin, index) => {
            return (
              <tr key={index}>
                <td><img src={coin.image}></img></td>
                <td>{coin.symbol}</td>
                <td>{coin.name}</td>
                <td>{coin.id}</td>
                <td>{coin.current_price}</td>
                <td>{coin.ath}</td>
                <td>{coin.market_cap}</td>
                <td>{coin.total_volume}</td>
                <td>{coin.price_change_percentage_24h}</td>
                <td>{coin.total_supply}</td>
                <td>{coin.max_supply}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;