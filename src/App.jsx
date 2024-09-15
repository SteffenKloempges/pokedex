import { PokemonContext } from './context/PokemonContext';
import { useState, useContext } from 'react';
import './App.css';
import PokemonFetch from './data/PokemonFetch';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [loading, setLoading] = useState([]);
  const [error, setError] = useState([]);

  console.log(allPokemon);

  return (
    <PokemonContext.Provider value={{ allPokemon, setAllPokemon, loading, setLoading, error, setError }}>
      <PokemonFetch />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </PokemonContext.Provider>
  )
}

export default App