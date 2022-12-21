import React, {
  useEffect,
  useState
} from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import { apiResponse } from './apiResponse';

export function Rates() {

  const [rates, setRates] = useState([{currency: 'USD', value: 1}]);

  // Runs the API once when the page is loaded.
  useEffect(() => {
    const getConversionRates = async() => {
      const promise = await apiResponse();
  
      Object.entries(promise).map(entry => {
        const currency = entry[0].slice(3, entry[0].length);
        const value = 1 / entry[1];
  
        setRates((prevState) => ([
          ...prevState,
          {
          currency: '1 ' + currency,
          value: value.toFixed(4) + ' USD'
          }
        ]));
  
      });
    };
    getConversionRates()
      .catch(console.error)
  }, [])


  return (
    <>
      <BootstrapTable data={rates} tableStyle={{
        tableLayout: 'auto',
        width: '500px',
      }}>
        <TableHeaderColumn thStyle={{width: '40%', textAlign: 'center'}}
        dataField='currency' isKey={true}>
          Currency codes
        </TableHeaderColumn>
        <TableHeaderColumn thStyle={{textAlign: 'center'}} dataField='value'>
          Value compared to USD
        </TableHeaderColumn>
      </BootstrapTable>
    </>
  )
};
