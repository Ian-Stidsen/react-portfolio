import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import CurrencyCalculator from './portfolio/CurrencyCalculator';
import TodoList from './portfolio/TodoList';
import Speedtype from './portfolio/Speedtype';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/currency-calculator" element={<CurrencyCalculator />} />
      <Route path="/todo-list" element={<TodoList />} />
      <Route path="/speedtype" element={<Speedtype />} />
    </Routes>
  </BrowserRouter>
);
