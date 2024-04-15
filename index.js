import getArgs from './helpers/args.js'
import { printError, printSuccess, printHelp } from './services/log.service.js'
import { getKeyValue, saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js'
import { getWeather } from './services/api.service.js'

const saveToken = async token => {
    if (!token.length) {
        printError('Token does not exits')
        return
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token)
        printSuccess("Token was saved")
    } catch (error) {
        printError(error.message)
    }
}

const saveCity = async city => {
    if (!city.length) {
        printError('City does not exits')
        return
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.city, city)
        printSuccess('City was saved')
    } catch (error) {
        printError(error.message)
    }
}

const getForcast = async () => {
    try {
        let city
        if (process.env.CITY && process.env.CITY.trim()) {
            city = process.env.CITY.trim()
        } else {
            city = await getKeyValue(TOKEN_DICTIONARY.city)
        }
        const response = await getWeather(city)
        console.log(response);
    } catch (error) {
        if (error?.response?.status == 404) {
            printError("City not found!")
        } else if (error?.response?.status == 401) {
            printError("Invalid Token")
        } else {
            printError(error.message)
        }
    }

}

const startCLI = () => {
    const args = getArgs(process.argv)
    if (args.h) {
        // help
        printHelp()
    }
    if (args.s) {
        // save city
        saveCity(args.s)
    }
    if (args.t) {
        // save token
        return saveToken(args.t)
    }
    // result
    getForcast()
}

startCLI()