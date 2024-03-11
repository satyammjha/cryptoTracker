import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
const Coins = () => {
  const { id } = useParams();
  const newId = id.replace(':', '');
  console.log(newId)
  const [coin, setCoin] = useState([]);

  const fetchCoin = async (id) => {
    const options = { method: 'GET', headers: { 'x-cg-demo-api-key': 'CG-fD8iwkEmmc8nGXqU7zRdfWeG' } };
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`, options)
      .then(response => response.json())
    setCoin(response);
  };

  useEffect(() => {
    fetchCoin(newId);
  }, []);

  return (
    <>
      <div>
        <p>{coin.id}</p>
        <p>{coin.symbol}</p>
      </div>
    </>
  );
};
export default Coins;