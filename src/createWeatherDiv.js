import { weatherImages } from "./weatherIcons"
import { weatherField } from "./eventListeners"
import { weatherDetailsScreen } from "./eventListeners"
import { deleteChildren } from "./deleteChildren"

function renderDetails(dateInfoJSON, currentDay) {
    
    deleteChildren(weatherDetailsScreen)

    //append information to the details screen for the called day
    const date = document.createElement('p')
    date.textContent = `${dateInfoJSON.days[currentDay].datetime}`
    weatherDetailsScreen.appendChild(date)

    const location = document.createElement('p')
    location.textContent = dateInfoJSON.resolvedAddress
    weatherDetailsScreen.appendChild(location)
    
    for (let i = 3; i < 24; i += 3) {
        const list = document.createElement('li')
        weatherDetailsScreen.appendChild(list)
    
        const image = document.createElement('img')
        image.src = weatherImages[dateInfoJSON.days[currentDay].hours[i].icon]
        image.classList.add('small-weather-icon')
        list.appendChild(image)
        
        const time = document.createElement('p') 
        if (i < 12) {
            time.textContent += '0'
        }
        time.textContent += `${i}00: ${dateInfoJSON.days[currentDay].hours[i].temp}\u00B0`
        list.appendChild(time)
    }

    const list0000 = document.createElement('li')
    weatherDetailsScreen.appendChild(list0000)

    const imageAM0000 = document.createElement('img')
    imageAM0000.src = weatherImages[dateInfoJSON.days[currentDay].hours[0].icon]
    imageAM0000.classList.add('small-weather-icon')
    list0000.appendChild(imageAM0000)
    
    const AM0000 = document.createElement('p') 
    AM0000.textContent = `0000: ${dateInfoJSON.days[currentDay + 1].hours[0].temp}\u00B0`
    list0000.appendChild(AM0000)

    return
}

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
        currentDescription.textContent = `Today is: ${weatherJSON.days[0].datetime}, Current Conditions are:`
        currentDescription.classList.add('weather-description')
        // todo: add current time widget?
        div.appendChild(currentDescription)
        
    } else {
        // description.textContent = `
        // The conditions for ${day.datetime} are: ${day.conditions}.
        // Temperature: ${day.temp}.
        // Temperature High: ${day.tempmax}.
        // Temperature Low: ${day.tempmin}.
        // Feels like: ${day.feelslike}.
        // `
        const dayDateText = document.createElement('p')
        const weatherDate = weatherJSON.days[currentDay].datetime
        dayDateText.textContent = `${weatherDate}`
        dayDateText.classList.add('weather-date')
        div.appendChild(dayDateText)

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
        
        // upon clicking a div, render the details under the weather details screen
        div.addEventListener('click', e => {
            renderDetails(weatherJSON,currentDay)
        })
    }

    // div.appendChild(description)
}


// display the local time and have it tick upwards...?

// function timeNow() {
//     setInterval(() => {
//         const time = Date.now()
//         console.log(time.toString())
//     },1000)
// }

// timeNow()

export { createweatherDiv }