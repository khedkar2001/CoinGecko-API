import { useEffect, useState } from "react";

import "./App.css";
import axios from "axios";
import Table from "./components/Table";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      )
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      });
    // console.log('response: ', response);
  }, []);

  return (
    <div className="main">
      <h1 className="header">Coin Geko</h1>
      {<Table data={data} />}
    </div>
  );
}

export default App;