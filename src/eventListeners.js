import { getWeather } from "./getWeather";

const cityInput = document.getElementById('city')
const submitButton = document.getElementById('submit')

submitButton.addEventListener('click', e => {
    // console.log(cityInput.value)
    getWeather(cityInput.value)
})

export { submitButton, cityInput }