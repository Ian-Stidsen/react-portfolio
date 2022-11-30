import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Portfolio from './pages/Portfolio/Portfolio';
import CurrencyCalculator from './pages/Projects/CurrencyCalculator';
import TodoList from './pages/Projects/TodoList';
import Speedtype from './pages/Projects/Speedtype';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/currency-calculator" element={<CurrencyCalculator />} />
        <Route path="/todo-list" element={<TodoList />} />
        <Route path="/speedtype" element={<Speedtype />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;