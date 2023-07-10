// src/components/CharacterList.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CharacterList.jsx'; // Importar el archivo CSS

const CharacterList = ({url}) => {
  const [characterDescription, setCharacterDescription] = useState({});

  useEffect(() => {
    axios.get(url)
    .then((res) => setCharacterDescription(res.data));
  },[])
  return (
    <div>
     
      <div  className={`card-indicator ${characterDescription.status === 'Alive' ? 'green' : 'red'}`}>
          <div className="character-card">
            <img className="character-image" src={characterDescription.image} alt={characterDescription.name} />
            <div className="character-details">
              <div className="status-container">
                <div className={`status-indicator ${characterDescription.status === 'Alive' ? 'green' : 'red'}`}></div>
                <p className="status-text">{characterDescription.status}</p>
              </div>
              <div className="character-name-container">
                <div className="character-name">
                  <h3>{characterDescription.name}</h3>
                </div>
              </div>
              <div className="character-info-container">
                <p>Origin: {characterDescription.origin?.name}</p>
                <p>Species: {characterDescription.species}</p>
                <p>Episode count: {characterDescription.episode?.length}</p>
              </div>
            </div>
          </div>
      </div>
      
    </div>
  );
};

export default CharacterList;
