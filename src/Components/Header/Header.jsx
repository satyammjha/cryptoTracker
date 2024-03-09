import React, { useContext } from 'react';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { CryptoContext } from '../../CryptoContext';

const Header = () => {
    const { currency, setCurrency } = useContext(CryptoContext);
    return (
        <>
            <AppBar position="static" color='transparent'>
                <Container>
                    <Toolbar>
                        <Typography
                            variant='h6'
                            style={{
                                color: 'gold',
                                flex: 1,
                                cursor: 'pointer',
                                fontWeight: 'bold'
                            }}
                        >
                            <Link to="/">cryptoHunter</Link>
                        </Typography>
                        <select
                            name="selectedCurrency"
                            className="cursor-pointer ml-12 border border-solid p-1 px-[1rem] rounded-md"
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                        >
                            <option value="INR">INR</option>
                            <option value="USD">USD</option>
                        </select>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
};

export default Header;
