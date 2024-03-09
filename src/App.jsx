import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Coins from './Components/Coins/Coins';
import '../src/App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="w-[1vw]">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins/:id" element={<Coins />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;