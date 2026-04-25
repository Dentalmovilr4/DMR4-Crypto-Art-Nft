const axios = require('axios');

// Configuración de la API
const apiKey = process.env.OPENSEA_API_KEY; // Se lee del secreto de GitHub o .env
const options = {
  method: 'POST',
  url: 'https://api.opensea.io/api/v2/collection/dmr4-crypto-art-genesis',
  headers: {
    accept: 'application/json',
    'x-api-key': apiKey
  },
  data: {
    // Aquí pondríamos los detalles de tu colección
    name: "DMR4 Crypto Art Genesis",
    description: "Arte digital exclusivo desde el Cesar, Colombia.",
    external_link: "https://dentalmovilr4.github.io/DMR4-Crypto-Art-Nft/"
  }
};

async function createCollection() {
  try {
    const response = await axios.request(options);
    console.log("¡Colección preparada en OpenSea!");
    console.log(response.data);
  } catch (error) {
    console.error("Error al conectar con OpenSea:", error.response ? error.response.data : error.message);
  }
}

createCollection();
