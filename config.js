//dotenv is to access environment variables on .env
const dotenv = require('dotenv')
dotenv.config()

//all these are firebase config from firebase...stored in .env 
const {
    HOST_NAME,
    HOST_URL,
    PORT,

    API_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID,
} = process.env

module.exports = {
    host:HOST_NAME,
    url:HOST_URL,
    port: PORT,
    firebaseConfig: {
        //retrieve it from firebase and .env variables
        apiKey: API_KEY,
        authDomain: AUTH_DOMAIN,
        projectId: PROJECT_ID,
        storageBucket: STORAGE_BUCKET,
        messagingSenderId: MESSAGING_SENDER_ID,
        appId: APP_ID
    }
}