import chalk from "chalk"
import dedent from "dedent-js";

const printError = error => {
    console.log(chalk.bgRed("ERROR") + ' ' + error);
}

const printSuccess = success => {
    console.log(chalk.bgGreenBright("SUCCESS") + ' ' + success);
}

const printHelp = () => {
    console.log(
        dedent`${chalk.bgCyan('HELP')}
        -s [CITY] for install city
        -h for help
        -t [API_KEY] for saving token
`
    );
}



const printWeather = (response, icon,) => {
    console.log(dedent`
    ${chalk.bgMagenta('WEATHER')} City weather ${response.name}
    ${icon} ${response.weather[0].description}
    Temperature: ${response.main.temp}°C (feels like ${response.main.feels_like}°C)
    Humidity: ${response.main.humidity}%
    Wind speed: ${response.wind.speed} km/h
    `);
}


export {
    printError,
    printSuccess,
    printHelp,
    printWeather,
}