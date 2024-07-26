import { weatherImages } from "./weatherIcons"
import { weatherField } from "./eventListeners"

function createweatherDiv(weatherJSON, currentDay) {
    const div = document.createElement('div')

    weatherField.appendChild(div)

    const weatherImg = document.createElement('img')

    // Use a variable that takes the string from the .JSON
    // then set the image source
    if (currentDay) {
        weatherImg.src = weatherImages[weatherJSON.days[currentDay].icon]
    } else {
        weatherImg.src = weatherImages[weatherJSON.currentConditions.icon]
    }

    weatherImg.classList.add('weather-icon')

    div.appendChild(weatherImg)
    div.classList.add('weather-div')

    const cityName = document.createElement('p')
    cityName.textContent = weatherJSON.resolvedAddress
    cityName.classList.add('weather-city')
    div.appendChild(cityName)

    // const description = document.createElement('p')
    // description.classList.add('weather-description')

    if (!currentDay) {
        // description.textContent = `
        // The time in ${day.resolvedAddress} is currently: ${day.currentConditions.datetime}.
        // The current conditions are: ${day.currentConditions.conditions}.
        // The temperature is: ${day.currentConditions.temp}.
        // Feels like: ${day.currentConditions.feelslike}.
        // `
        const currentTemp = document.createElement('p')
        currentTemp.textContent = `${weatherJSON.currentConditions.temp}\u00B0`
        currentTemp.classList.add('weather-current')
        div.appendChild(currentTemp)

        const currentDescription = document.createElement('p')
        currentDescription.textContent = 'Today is: XXX, Current Conditions are:'
        // todo: add current time widget?
        div.appendChild(currentDescription)
        return
    } else {
        // description.textContent = `
        // The conditions for ${day.datetime} are: ${day.conditions}.
        // Temperature: ${day.temp}.
        // Temperature High: ${day.tempmax}.
        // Temperature Low: ${day.tempmin}.
        // Feels like: ${day.feelslike}.
        // `
        const tempHigh = document.createElement('p')
        const tempLow = document.createElement('p')
        const spacer = document.createElement('p')
        tempHigh.textContent = `${weatherJSON.days[currentDay].tempmax}\u00B0`
        tempLow.textContent = `${weatherJSON.days[currentDay].tempmin}\u00B0`
        spacer.textContent = '/'
        tempHigh.classList.add('weather-high')
        tempLow.classList.add('weather-low')
        spacer.classList.add('weather-spacer')

        //

        div.appendChild(tempHigh)
        div.appendChild(tempLow)
        div.appendChild(spacer)
        return
    }
    // div.appendChild(description)
}

export { createweatherDiv }