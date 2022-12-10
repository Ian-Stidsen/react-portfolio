import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Portfolio from './pages/Portfolio/Portfolio';
import Todo from './pages/Projects/todo-list/Todo';
import Converter from './pages/Projects/currency-converter/pages/Converter';
import ConverterRates from './pages/Projects/currency-converter/pages/Rates';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/converter" element={<Converter />} />
        <Route path="/converter/rates" element={<ConverterRates />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;