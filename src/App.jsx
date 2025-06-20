import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import { SearchProvider } from './components/SearchContext';

function App() {
  return (
    <div className="flex flex-col items-center">
      <SearchProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="detail/:id" element={<MovieDetail />} />
          </Route>
        </Routes>
      </SearchProvider>
    </div>
  );
}

export default App;
