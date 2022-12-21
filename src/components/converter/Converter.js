import React, {
  useEffect,
  useState,
  useRef
} from 'react';
import './converter.css';

import { apiResponse } from './apiResponse';

import API_KEYS from '../../data/currencyAPI.json';

//const CURRENCY_API =`https://api.apilayer.com/currency_data/convert?to=${currencyTo.value}&from=${currencyFrom.value}&amount=${inputFrom.value}`;


export function Converter() {

  // Runs the API once when the page is loaded.
  const [rates, setRates] = useState({USD: 1})
  const [currencyCodes, setCurrencyCodes] = useState([<option key={'USD'} value='USD'>USD</option>]);

  const currencyFrom = useRef('USD');
  const currencyTo = useRef('USD');

  const inputFrom = useRef(0);
  const inputTo = useRef(0);

  useEffect(() => {
    async function getConversionRates() {
      const promise = await apiResponse();
  
      Object.entries(promise).map(entry => {
        const currency = entry[0].slice(3, entry[0].length);
        
        setRates((prevState) => ({
          ...prevState,
          [currency]: entry[1]
        }));
        
        setCurrencyCodes((prevState) => ([
          ...prevState,
          <option key={currency} value={currency}>{currency}</option>
        ]));
        
      });
    };
    getConversionRates();
  }, [])


  const convert = () => {
    const currencyFromValue = currencyFrom.current.value;
    const currencyToValue = currencyTo.current.value;
    const inputFromValue = inputFrom.current.value;

    const rate = rates[currencyToValue] / rates[currencyFromValue];
    const result = inputFromValue * rate;

    inputTo.current.value = result;
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50vh'
  }

  return (
    <>
    <div className="container" style={containerStyle}>
      <h1 className='converter-title'>Currency Converter</h1>
      <form>

        <div className="input-group">
          <div className="input-group-text">
            <select ref={currencyFrom} className="form-select" onChange={convert} name="currency" id="currencyFrom">
              {currencyCodes}
            </select>
          </div>
          <div className='form-floating'>
            <input ref={inputFrom} className="form-control" onChange={convert} type="number" id="inputFrom" placeholder=""></input>
            <label htmlFor="convertFrom" className='form-label'>Convert from {currencyFrom.value}</label>
          </div>

          <div className="input-group-text">
            <select ref={currencyTo} className="form-select" onChange={convert} name="currency" id="currencyTo">
              {currencyCodes}
            </select>
          </div>
          <div className='form-floating'>
            <input ref={inputTo} readOnly className="form-control" type="number" id="inputTo" placeholder=""></input>
            <label htmlFor="convertTo" className='form-label'>Convert to {currencyTo.value}</label>
          </div>
        </div>

      </form>
    </div>
    </>
  );
}
