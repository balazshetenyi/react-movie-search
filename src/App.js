import React from 'react';
import './App.css';
import MovieSearch from './SearchMovies';

function App() {
  return (
    <div className="container">
      <h1 className='title'>React Movie Search</h1>

      <MovieSearch />
    </div>
  );
}

export default App;
