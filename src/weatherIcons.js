import clearDay from './img/weather-icons/clear-day.svg' 
import showersDay from './img/weather-icons/showers-day.svg'
import clearNight from './img/weather-icons/clear-night.svg'
import showersNight from './img/weather-icons/showers-night.svg'
import cloudy from './img/weather-icons/cloudy.svg'
import sleet from './img/weather-icons/sleet.svg'
import fog from './img/weather-icons/fog.svg'
import snowShowersDay from './img/weather-icons/snow-showers-day.svg'
import hail from './img/weather-icons/hail.svg'
import snowShowersNight from './img/weather-icons/snow-showers-night.svg'
import partlyCloudyDay from './img/weather-icons/partly-cloudy-day.svg'
import snow from './img/weather-icons/snow.svg'
import partlyCloudyNight from './img/weather-icons/partly-cloudy-night.svg'
import thunderRain from './img/weather-icons/thunder-rain.svg'
import rainSnowShowersDay from './img/weather-icons/rain-snow-showers-day.svg'
import thunderShowersDay from './img/weather-icons/thunder-showers-day.svg'
import rainSnowShowersNight from './img/weather-icons/rain-snow-showers-night.svg'
import thunderShowersNight from './img/weather-icons/thunder-showers-night.svg'
import rainSnow from './img/weather-icons/rain-snow.svg'
import thunder from './img/weather-icons/thunder.svg'
import rain from './img/weather-icons/rain.svg'
import wind from './img/weather-icons/wind.svg'

// Call the correct value by using the string provided by
// the API as a key lookup.
const weatherImages = {
    "clear-day": clearDay,
    "showers-day": showersDay,
    "clear-night": clearNight,
    "showers-night": showersNight,
    "cloudy": cloudy,
    "sleet": sleet,
    "fog": fog,
    "snow-showers-day": snowShowersDay,
    "hail": hail,
    "snow-showers-night": snowShowersNight,
    "partly-cloudy-day": partlyCloudyDay,
    "snow": snow,
    "partly-cloudy-night": partlyCloudyNight,
    "thunder-rain": thunderRain,
    "rain-snow-showers-day": rainSnowShowersDay,
    "thunder-showers-day": thunderShowersDay,
    "rain-snow-showers-night": rainSnowShowersNight,
    "thunder-showers-night": thunderShowersNight,
    "rain-snow": rainSnow,
    "thunder": thunder,
    "rain": rain,
    "wind": wind
}

export { weatherImages }