const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const { getFirestore } = require('firebase-admin/firestore');
const db = getFirestore();
const {
  onRequest
} = require("firebase-functions/v2/https");
const {
  setGlobalOptions
} = require("firebase-functions/v2");
const {
  onCall
} = require('firebase-functions/v2/https');
const {defineSecret} = require('firebase-functions/params');
const WEATHER_API_KEY = defineSecret('WEATHER_API_KEY');

exports.getWeather = onCall({secrets: [WEATHER_API_KEY]}, async (request) => {
    const API_KEY = WEATHER_API_KEY.value();
    const API_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=`;
    const {latitude, longitude} = request.data;
    const URL = `${API_URL}${latitude},${longitude}&aqi=no&lang=pt`;

    try {
        const response = await fetch(URL);
        if(!response.ok) {
            throw new Error("Erro ao obter os dados do seu API, senhor!");
        }
        const data = await response.json();
        return {data};
    } catch (error) {
        console.error("Senhor, houve um erro na Cloud Function: ", error);
        return {error: error.message};
    }
});