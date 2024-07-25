import { weatherImages } from "./weatherIcons"
import { weatherField } from "./eventListeners"

function createweatherDiv(day, current) {
    const div = document.createElement('div')

    weatherField.appendChild(div)

    const weatherImg = document.createElement('img')

    // Use a variable that takes the string from the .JSON
    // then set the image source
    if (current == true) {
        weatherImg.src = weatherImages[day.currentConditions.icon]
    } else {
        weatherImg.src = weatherImages[day.icon]
    }

    div.appendChild(weatherImg)

    const description = document.createElement('p')

    if (current == true) {
        description.textContent = `
        The time in ${day.resolvedAddress} is currently: ${day.currentConditions.datetime}.
        The current conditions are: ${day.currentConditions.conditions}.
        The temperature is: ${day.currentConditions.temp}.
        Feels like: ${day.currentConditions.feelslike}.
        `
    } else {
        description.textContent = `
        The conditions for ${day.datetime} are: ${day.conditions}.
        Temperature: ${day.temp}.
        Temperature High: ${day.tempmax}.
        Temperature Low: ${day.tempmin}.
        Feels like: ${day.feelslike}.
        `
    }
    div.appendChild(description)
}

export { createweatherDiv }