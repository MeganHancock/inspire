import { AppState } from "../AppState.js";
import { Weather } from "../models/Weather.js";
import { api } from "./AxiosService.js";

class WeatherService {

    async getCurrentWeather() {
        const response = await api.get('api/weather')
        console.log('got weather', response.data);
        const receivedWeather = response.data.map(weatherPOJO => new Weather(weatherPOJO))
        AppState.weather = receivedWeather
    }

}

export const weatherService = new WeatherService()