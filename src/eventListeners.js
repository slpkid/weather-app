import { getWeather } from "./getWeather";
import { createweatherDiv } from './createWeatherDiv'
import { deleteChildren } from './deleteChildren'

const weatherField = document.getElementById('weather-field')

const weatherDetailsScreen = document.getElementById('details-screen')

const cityInput = document.getElementById('city')
const submitButton = document.getElementById('submit')

submitButton.addEventListener('click', submitButtonFunction)

async function submitButtonFunction() {
    let weatherJSON = await getWeather(cityInput.value)

    console.log(weatherJSON)
    deleteChildren(weatherField)
    // createweatherDiv(weatherJSON)
    let i = 0
    weatherJSON.days.forEach(element => {
        createweatherDiv(weatherJSON,i)
        i++
    });
}

export { submitButton, cityInput, weatherField , weatherDetailsScreen}