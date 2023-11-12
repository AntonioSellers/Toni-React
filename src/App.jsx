import React from 'react';
import CurrencyChanger from './CurrencyChanger';
import './App.css';

const App = () => (
  <div className="app-container">
    <CurrencyChanger currencySymbol="$" initialValue="10" change={1.055925} />
    <CurrencyChanger currencySymbol="£" initialValue="15" change={7.578144} />
    <CurrencyChanger currencySymbol="¥" initialValue="20" change={0.8665750} />
  </div>
);

export default App;
