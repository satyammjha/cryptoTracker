import React, { createContext, useEffect, useState } from 'react';
const CryptoContext = createContext();
const CryptoProvider = ({ children }) => {
    const [currency, setCurrency] = useState('INR');
    const [symbol, setSymbol] = useState('$');
    useEffect(() => {
        if (currency === 'INR') setSymbol('₹')
        else if (currency === 'USD') setSymbol('$')
    }, [currency])
    return (
        <CryptoContext.Provider value={{ currency, symbol, setCurrency }}>
            {children}
        </CryptoContext.Provider>
    );
};
export { CryptoContext, CryptoProvider };