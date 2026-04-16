let IS_PROD = true;
const server = IS_PROD ?
    "https://meethubbackend-xmlj.onrender.com" :

    "http://localhost:8000"


export default server;