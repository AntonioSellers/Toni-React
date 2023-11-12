import React from 'react';
import CurrencyConverter from './CurrencyConverter';

const CurrencyChanger = ({ currencySymbol, initialValue, change }) => {
  return (
    <div>
      <h2>{`Currency Changer - ${currencySymbol}`}</h2>
      <CurrencyConverter symbol={currencySymbol} initialValue={initialValue} change={change} />
    </div>
  );
};

export default CurrencyChanger;
