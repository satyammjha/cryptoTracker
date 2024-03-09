import React, { useContext, useEffect, useState } from 'react';
import { CryptoContext } from '../../CryptoContext';
import { TrendingCoins } from '../../Config/api';
import axios from 'axios';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from 'react-router-dom';

const Corousel = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const { currency, symbol } = useContext(CryptoContext);
  
  const fetchTrendingCoins = async () => {
    try {
      const response = await axios.get(TrendingCoins(currency));
      const data = response.data
      setTrendingCoins(data);

    } catch (error) {
      console.error('Error fetching trending coins:', error);
    }
  };
  useEffect(() => {
    fetchTrendingCoins();

  }, [currency]);

  const responsive = {
    0: {
      items: 2
    },
    512: {
      items: 4
    }
  }
  const items = trendingCoins.map((coin, index) => {

    let profit = coin.price_change_percentage_24h >= 0;

    return (
      <Link to={`/coins/${coin.id}`} key={index} style={{
        background: 'unset',
      }}>
        <img src={coin.image} alt={coin.name} height={60} width={60} style={{ marginBottom: 10 }} />
        <div className='flex flex-col'>
          <span>{coin.name}</span>
          <div className="flex">
            <span>{symbol} {coin.current_price} </span>
            <span style={{
              color: profit ? 'green' : 'red',
              marginLeft: '0.5rem',
              fontSize: '11px',
              fontWeight: 'bold'
            }}>{profit && '+'}  {coin.price_change_percentage_24h.toFixed(2)} {'%'}</span>
          </div>
        </div>

      </Link>
    )
  })
  return (
    <>

{items ? (
    <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
        style={{ background: 'unset' }}
    />
) : (
    <p>Loading...</p>
)}
    </>
  );
};
export default Corousel;