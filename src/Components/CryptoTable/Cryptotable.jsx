import React, { useContext, useState, useEffect } from 'react'
import { CoinList } from '../../Config/api';
import { CryptoContext } from '../../CryptoContext';
import { TextField, Typography, LinearProgress } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import images from '../../assets/img.jpg'

const CryptoTable = () => {

  const [Coins, setCoins] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  const { currency, symbol } = useContext(CryptoContext);

  const fetchCoins = async () => {
    setLoading(true);
    const data = await axios.get(CoinList(currency));
    setCoins(data.data);
    setLoading(false);
    console.log(data.data);
  }
  useEffect(() => {
    fetchCoins();
  }, [currency])


  const columns = [

    {
      id: 'coin',
      label: 'Coin',
      minWidth: 170,
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'price',
      label: `Price in ${currency}`,
      minWidth: 170,
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'change24H',
      label: '24H Change',
    },
    {
      id: 'marketCap',
      label: 'Market Cap.',
      minWidth: 170,
      format: (value) => value.toFixed(2),
    },
  ];

  function createData(coin, price, change24H, marketCap) {
    return { coin, price, change24H, marketCap };
  }

  const rows = Coins.map((coin) => createData(coin.image, coin.name, coin.current_price, coin.price_change_percentage_24h, coin.market_cap));


  return (
    <>
      <div className="overflow-y-scroll">
        <h1 style={{
          fontFamily: 'Montserrat'
        }} className='text-[20px] text-center font-bold mt-3'>Cryptocurrencies prices by Market</h1>
        <TextField
          label={'Search for a cryptocurrency...'}
          variant='outlined'

          style={{
            width: '70vw',
            marginLeft: '20%',
          }}

          InputLabelProps={{
            style: {
              color: 'white'
            }
          }}
          InputProps={{
            style: {
              color: 'white',
              borderColor: 'white'
            }
          }}
        />

        {/* <Paper sx={{ width: '80%', overflow: 'hidden', marginLeft: '10%' }} style={{
          backgroundColor: 'black', color: 'white', scrollbarWidth: 'none'
        }}>
          <TableContainer sx={{ maxHeight: 440 }} style={{ scrollbarWidth: 'none', }}>

            {Loading ? <LinearProgress color="success" width={100} /> : <Table stickyHeader aria-label="sticky table" >

              <TableHead>
                <TableRow>
                  {columns.map((column) => (

                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ color: 'white', backgroundColor: 'gold', fontWeight: 'bold', border: '0.3px solid white' }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <>
                              <TableCell key={column.id} align={column.align} style={{ color: 'white', fontWeight: 'bold', width: '-100rem' }}>
                                {column.id === 'coin' ? (
                                  <Link to={`/coins/${row.coin.id}`}>
                                    <img src={row.coin} alt={row.coin.name} height={30} width={30} />
                                  </Link>
                                ) : (
                                  <Link to={`/coins/${row.coin.id}`}>
                                    {column.format && typeof value === 'number'
                                      ? column.format(value)
                                      : value}
                                  </Link>
                                )}
                              </TableCell>
                            </>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>}
          </TableContainer>
        </Paper> */}
        <div className="container overflow-y-scroll no-scrollbar">
          <div className="tableHead flex divide-x flex-row gap-36 ml-[20%] rounded-md" style={{ backgroundColor: 'goldenrod', width: '70vw', height: '30px' }}>


            <span className="pl-6" >Coin</span>
            <span className="pl-6 ">Price</span>
            <span className="pl-3 ">24H Change</span>
            <span className="pl-1 ">Market Cap</span>
          </div>
          {


            Coins.map((coin, index) => {
              return (
                <>

                  <div key={index} className="coinList  ml-[20%] rounded-md" style={{ backgroundColor: 'black', color: 'white', width: '70vw', height: '50px' }}>

                    <Link to={`/coins/:${coin.id}`} style={{ marginBottom: '10px' }} className='flex divide-x flex-row gap-36'>
                      <span className="pl-6 flex align-center gap-4"> <img src={coin.image} style={{ height: '30px', width: '3vw' }} />{coin.id}</span>
                      <span className="pl-6" style={{ height: '30px', width: '3vw' }} >Price</span>
                      <span className="pl-3 " style={{ height: '30px', width: '3vw' }} >24H Change</span>
                      <span className="pl-1 " style={{ height: '30px', width: '3vw' }} >Market Cap</span>
                    </Link>

                    <hr />
                  </div>
                </>

              )

            })


          }
        </div>
      </div >
    </>
  )
}
export default CryptoTable;