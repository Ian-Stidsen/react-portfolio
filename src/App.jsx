import React, { lazy, Suspense } from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Portfolio from './pages/Portfolio/Portfolio';

const TodoList = lazy(() => import('./pages/Projects/todo-list/Todo'));

const ConverterNavbar = lazy(() => import('./pages/Projects/currency-converter/components/Navbar'));
const Converter = lazy(() => import('./pages/Projects/currency-converter/pages/Converter'));
const ConverterRates = lazy(() => import('./pages/Projects/currency-converter/pages/Rates'));

const Speedtype = lazy(() => import('./pages/Projects/speedtype/Speedtype'));


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/todo" element={<Suspense><TodoList /></Suspense>} />

        <Route path='/converter/' element={<ConverterNavbar />}>
          <Route path="/converter/currency" element={<Converter />} />
          <Route path="/converter/rates" element={<ConverterRates />} />
        </Route>

        <Route path="/speedtype" element={<Suspense><Speedtype /></Suspense>} />
      </Routes>
    </Router>
  )
}
export default App;