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

export {
    printError,
    printSuccess,
    printHelp,
}