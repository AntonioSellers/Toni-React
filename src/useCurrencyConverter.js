import React, { useState, useEffect } from 'react';

const useCurrencyConverter = () => {
  const [euros, setEuros] = useState(0);
  const [dollars, setDollars] = useState(0);

  useEffect(() => {
    const convertCurrency = (source, value) => {
      const exchangeRate = 1.18; // 1 Euro a Dólar

      if (source === 'euros') {
        setEuros(value);
        setDollars((value * exchangeRate).toFixed(2));
      } else if (source === 'dollars') {
        setDollars(value);
        setEuros((value / exchangeRate).toFixed(2));
      }
    };

    convertCurrency('euros', euros);
  }, [euros, dollars]);

  return { euros, dollars, convertCurrency };
};

export default useCurrencyConverter;
