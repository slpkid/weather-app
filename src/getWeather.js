import { spaceConverter } from './spaceConverter'
import { weatherField } from './eventListeners'

async function getWeather(arg) {

    try {
        let query = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' 
        // Convert spaces so visual crossing can read the data
        + spaceConverter(arg) 
        + '?key=Y5C2BM4KCJ4BXM4ULUQ5AUAFG'
        let weatherResponse = await fetch(query)

        let weatherJson = await weatherResponse.json()

        // console.log(weatherJson)

        // Show today's forecasted temperatures
        console.log(`Today's forecast is: `)

        weatherJson.days[0].hours.forEach( hour => {
            console.log(`${hour.datetime}: ${hour.temp}`)
        })

        // broadcast alerts
        weatherJson.alerts.forEach(element => {
            console.log(`ALERT!!! ${element.headline}: ${element.event}`)
        });

        //broadcast description
        console.log(`Today's weather description: ${weatherJson.description}`)

        //broadcast 15 day forecast
        weatherJson.days.forEach( day => {
            console.log(
                `Date: ${day.datetime} 
                High of: ${day.tempmax} 
                Low of: ${day.tempmin} 
                Feels like: ${day.feelslike} 
                Description: ${day.description}`
            )
        })
        return weatherJson
    } catch (err) {
        throw new Error (err)
    }

}

export { getWeather, weatherField }