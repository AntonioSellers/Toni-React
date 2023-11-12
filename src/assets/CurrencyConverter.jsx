import React from 'react';
import CustomInput from './CustomInput';
import useCurrencyConverter from './useCurrencyConverter';

const CurrencyConverter = ({ symbol, initialValue, change }) => {
  const { convertedValue, convertCurrency } = useCurrencyConverter(parseFloat(initialValue));

  return (
    <div>
      <CustomInput label={`${symbol} Value`} value={convertedValue} onChange={(value) => convertCurrency(value)} />
      <p>{`Equivalent in Euros: ${convertedValue / change}`}</p>
    </div>
  );
};

export default CurrencyConverter;
