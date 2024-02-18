import { AppState } from "../AppState.js";
import { Weather } from "../models/Weather.js";
import { api } from "./AxiosService.js";

class WeatherService {
    tempToCelsius(isFahrenheit) {
        console.log(isFahrenheit)
        isFahrenheit = false
        console.log(isFahrenheit)
        AppState.weather.fahrenheit = isFahrenheit
        console.log(AppState.weather.fahrenheit);

        // if (isFahrenheit == true) {
        //     console.log('temp swap service', AppState.weather.fahrenheit);
        //     const tempUpdateData = { fahrenheit: !AppState.weather.fahrenheit }
        //     AppState.weather.fahrenheit = tempUpdateData
        //     console.log('temp to celsius', tempUpdateData);
        // } else {
        //     const tempUpdateData = { fahrenheit: AppState.weather.fahrenheit }
        //     AppState.weather.fahrenheit = tempUpdateData
        //     console.log('tempUpdateData F FALSE', tempUpdateData);
        // }
        AppState.emit('weather')

    }

    tempToFahrenheit(isFahrenheit) {
        console.log(isFahrenheit)
        isFahrenheit = true
        console.log(isFahrenheit)
        AppState.weather.fahrenheit = isFahrenheit
        console.log(AppState.weather.fahrenheit);

        AppState.emit('weather')

    }

    async getCurrentWeather() {
        const response = await api.get('api/weather')
        console.log('got weather', response.data);
        const receivedWeather = new Weather(response.data)
        AppState.weather = receivedWeather
        console.log('received weather', receivedWeather)
    }

}

export const weatherService = new WeatherService()