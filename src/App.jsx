
import './App.css'
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import CharacterList from './components/CharacterList';
import axios from 'axios';


const App = () => {
  const [character, setCharacter] = useState({});
  const [location, setLocation] = useState(' ');

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 126) + 1;
    axios.get(`https://rickandmortyapi.com/api/location/${randomId}/`)
      .then((res) => setCharacter(res.data));
  }, [])

  const searchType = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${location}/`)
      .then((res) => setCharacter(res.data));
  }

  return (
    <section>
      <Header />
      <div className='search'>
        <input
          name="name"
          placeholder="Write the number of the location here"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={searchType}>Search </button>
      </div>

      <div className='dimension-card'>
        <h2>Dimension: <br />{character.dimension} </h2>
        <h2>Name: <br />{character.name} </h2>
        <h2>Type: <br />{character.type} </h2>
        <h2>Poblation: <br /> {character.residents?.length}</h2>
      </div>

      <div className="character-grid">
        {
          character.residents?.map((resident) => (
            <CharacterList url={resident} key={resident} />
          ))
        }
      </div>
    </section>
  );
};

export default App;
