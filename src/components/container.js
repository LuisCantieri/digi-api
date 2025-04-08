import React, { useState, useEffect } from 'react';
import { getRandomDigimon } from '../services/api';
import '../styles/container.css';

const Container = () => {
  const [digimon, setDigimon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDigimon = async () => {
      const data = await getRandomDigimon();
      setDigimon(data);
      setLoading(false);
    };

    fetchDigimon();
  }, []);

  const handleRefresh = async () => {
    setLoading(true);
    const data = await getRandomDigimon();
    setDigimon(data);
    setLoading(false);
  };

  if (loading) {
    return <div className="loading">Carregando Digimon...</div>;
  }

  if (!digimon) {
    return <div className="error">Falha ao carregar Digimon.</div>;
  }

  return (
    <div className="digimon-container">
      <div className="digimon-card">
        <h2>{digimon.name}</h2>
        <img src={digimon.images[0]?.href} alt={digimon.name} className="digimon-image" />
        <div className="digimon-info">
          <p><strong>Level:</strong> {digimon.levels[0]?.level || 'Unknown'}</p>
          <p><strong>Type:</strong> {digimon.types[0]?.type || 'Unknown'}</p>
          <p><strong>Attribute:</strong> {digimon.attributes[0]?.attribute || 'Unknown'}</p>
          <p><strong>Description:</strong> {digimon.descriptions[0]?.description || 'No description available'}</p>
        </div>
        <button onClick={handleRefresh} className="refresh-button">
          Novo Digimon
        </button>
      </div>
    </div>
  );
};

export default Container;