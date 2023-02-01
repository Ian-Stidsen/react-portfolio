import React, { lazy } from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Portfolio from './portfolio/Portfolio';

const ConverterNavbar = lazy(() => import('./components').then(module => {
  return { default: module.Navbar };
}));
const Converter = lazy(() => import('./components').then(module => {
  return { default: module.Converter };
}));

const ConverterRates = lazy(() => import('./components').then(module => {
  return { default: module.Rates };
}));

const Todolist = lazy(() => import('./components').then(module => {
  return { default: module.Todo };
}));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />

        <Route path='/converter/' element={<ConverterNavbar />}>
          <Route path="/converter/currency" element={<Converter />} />
          <Route path="/converter/rates" element={<ConverterRates />} />
        </Route>

        <Route path='/todolist' element={<Todolist />} />

      </Routes>
    </Router>
  )
}
export default App;