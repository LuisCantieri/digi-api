import axios from 'axios';

const api = axios.create({
  baseURL: 'https://digi-api.com/api/v1/digimon',
  timeout: 5000,
});

const DIGIMON_LIST = [
  'agumon', 'gabumon', 'patamon', 'biyomon', 'tentomon',
  'palmon', 'gomamon', 'gatomon', 'elecmon', 'kunemon',
  'veemon', 'wormmon', 'hawkmon', 'armadillomon', 'minomon',
  'stingmon', 'exveemon', 'paildramon', 'dinobeemon', 'silphymon',
  'guilmon', 'renamon', 'terriermon', 'impmon', 'calumon',
  'growlmon', 'kyubimon', 'gargomon', 'beelzemon', 'sakuyamon',
  'agnimon', 'wolfmon', 'fairymon', 'blitzmon', 'chackmon',
  'kumamon', 'beetlemon', 'lowemon', 'kazarimon', 'mercurymon',
 'dorugamon', 'ryudamon', 'dorumon','flamedramon', 'raidramon', 
 'magnamon', 'goldveedramon', 'sagittarimon','betamon', 'tyrannomon', 
 'monochromon', 'airdramon', 'angemon','devidramon', 'ogremon', 'leomon', 
 'mamemon', 'metalgreymon(virus)'
];

const FALLBACK_DIGIMON = {
  id: 0,
  name: "Digimon Padrão",
  images: [{ href: "https://digi-api.com/images/digimon/default.jpg" }],
  levels: [{ level: "Rookie" }],
  types: [{ type: "Data" }],
  attributes: [{ attribute: "Neutral" }]
};

export const getDigimon = async (name) => {
  try {
    const response = await api.get(`/${name}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar Digimon:", error);
    return {
      ...FALLBACK_DIGIMON,
      name: name || "Digimon Desconhecido"
    };
  }
};

export const getRandomDigimon = async () => {
  try {
    const randomIndex = Math.floor(Math.random() * DIGIMON_LIST.length);
    return await getDigimon(DIGIMON_LIST[randomIndex]);
  } catch (error) {
    console.error("Erro ao buscar Digimon aleatório:", error);
    return FALLBACK_DIGIMON;
  }
};