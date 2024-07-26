import { getWeather } from "./getWeather";
import { createweatherDiv } from './createWeatherDiv'
import { deleteChildren } from './deleteChildren'

const weatherField = document.getElementById('weather-field')

const cityInput = document.getElementById('city')
const submitButton = document.getElementById('submit')

submitButton.addEventListener('click', submitButtonFunction)

async function submitButtonFunction() {
    let weatherJson = await getWeather(cityInput.value)

    console.log(weatherJson)
    deleteChildren(weatherField)
    createweatherDiv(weatherJson)
    createweatherDiv(weatherJson,1)
}

export { submitButton, cityInput, weatherField }