import React, { lazy, Suspense } from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Portfolio from './pages/Portfolio/Portfolio';

const ConverterNavbar = lazy(() => import('./components').then(module => {
  return { default: module.Navbar };
}));
const Converter = lazy(() => import('./components').then(module => {
  return { default: module.Converter };
}));

const ConverterRates = lazy(() => import('./components').then(module => {
  return { default: module.Rates };
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

      </Routes>
    </Router>
  )
}
export default App;