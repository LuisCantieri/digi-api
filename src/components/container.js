import React, { useState, useEffect } from 'react';
import { getRandomDigimon } from '../services/api';
import '../styles/container.css';

const Container = () => {
  const [digimon, setDigimon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDigimon = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getRandomDigimon();
      
      if (data.id === 0) { // Verifica se está usando o fallback
        throw new Error('API não respondeu, usando dados locais');
      }
      
      setDigimon(data);
    } catch (err) {
      console.error('Erro ao buscar Digimon:', err);
      setError(err.message || 'Falha ao carregar Digimon');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDigimon();
  }, []);

  if (loading) {
    return <div className="loading">Carregando Digimon...</div>;
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Erro ao carregar Digimon</h2>
        <p>{error}</p>
        <button 
          onClick={fetchDigimon}
          className="retry-button"
        >
          Tentar Novamente
        </button>
      </div>
    );
  }

  return (
    <div className="digimon-container">
      <div className="digimon-card">
        <h2>{digimon.name}</h2>
        <img src={digimon.images[0]?.href} alt={digimon.name} />
        <div className="digimon-info">
          <p><strong>Nível:</strong> {digimon.levels[0]?.level || 'Desconhecido'}</p>
          <p><strong>Tipo:</strong> {digimon.types[0]?.type || 'Desconhecido'}</p>
          <p><strong>Atributo:</strong> {digimon.attributes[0]?.attribute || 'Desconhecido'}</p>
        </div>
        <button 
          onClick={fetchDigimon}
          className="refresh-button"
        >
          Novo Digimon
        </button>
      </div>
    </div>
  );
};

export default Container;