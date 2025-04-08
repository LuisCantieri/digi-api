import axios from 'axios';

const api = axios.create({
  baseURL: 'https://digi-api.com/api/v1/digimon',
});

export const getDigimon = async (name) => {
  try {
    const response = await api.get(`/${name}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar Digimon:", error);
    return null;
  }
};

export const getRandomDigimon = async () => {
  try {
    // A API não tem um endpoint aleatório, então vamos usar alguns populares
    const digimons = ['agumon', 'gabumon', 'patamon', 'gatomon', 'tentomon'];
    const randomIndex = Math.floor(Math.random() * digimons.length);
    return await getDigimon(digimons[randomIndex]);
  } catch (error) {
    console.error("Erro ao buscar Digimon aleatório:", error);
    return null;
  }
};