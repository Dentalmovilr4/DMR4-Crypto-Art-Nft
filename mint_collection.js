const axios = require('axios');

// Configuración principal
const API_KEY = process.env.OPENSEA_API_KEY;
const TOTAL_NFTS = 16;
const REPO_OWNER = "Dentalmovilr4";
const REPO_NAME = "DMR4-Crypto-Art-Nft";

async function mintNFTs() {
    console.log("🚀 Iniciando proceso de minteo masivo para DMR4 Crypto Art...");

    for (let i = 1; i <= TOTAL_NFTS; i++) {
        try {
            // 1. Construimos la URL de la metadata que ya creaste en GitHub
            const metadataUrl = `https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/main/metadata/${i}.json`;
            
            console.log(`📦 Procesando NFT #${i}...`);

            // 2. Llamada a la API de OpenSea (v2)
            const response = await axios.post('https://api.opensea.io/api/v2/chain/solana/contract/tu_direccion_de_contrato/nfts', {
                metadata_url: metadataUrl,
                // Aquí puedes agregar más parámetros según tu contrato
            }, {
                headers: {
                    'X-API-KEY': API_KEY,
                    'accept': 'application/json',
                    'content-type': 'application/json'
                }
            });

            console.log(`✅ NFT #${i} enviado con éxito:`, response.data.identifier);
            
            // Esperamos un poco para no saturar la API (Rate limit)
            await new Promise(resolve => setTimeout(resolve, 1000));

        } catch (error) {
            console.error(`❌ Error en el NFT #${i}:`, error.response ? error.response.data : error.message);
        }
    }
    console.log("🏁 Proceso terminado.");
}

mintNFTs();
