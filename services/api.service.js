import axios from 'axios'
import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js'


const getWeather = async city => {
    let token = await getKeyValue(TOKEN_DICTIONARY.token)
    if (!token) {
        throw new Error("API doesn't exist, -t [API_KEY] for saving token")
    }

    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: token,
            lang: 'en',
            units: "metric"
        }
    })

    return data
}

export { getWeather }


// const url = new URL("https://api.openweathermap.org/data/2.5/weather?q=Tashkent&appid=eceb400020d177bdbe4382defb4302d5")

// await url.searchParams.append('q', city)
// await url.searchParams.append('appid', token)
// url.searchParams.append('lang', 'en')
// url.searchParams.append('units', 'metric')


// https.get(url, (response) => {
//     let res = ''
//     response.on('data', (chunk) => {
//         res += chunk
//     })
//     response.on('end', () => {
//         console.log(res);
//     })
// })