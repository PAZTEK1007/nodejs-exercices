#!/usr/bin/env node

// Modules
const { getCode } = require('country-list');
const axios = require('axios');
const chalk = require('chalk');
const boxen = require('boxen');
const figlet = require('figlet');
const ora = require('ora');
const Table = require('cli-table');
const dateFormat = require('dateformat');

// Get the country name from the command line
const args = process.argv.slice(2);
const country = args[0];
const countryCode = getCode(country);
const url = `https://date.nager.at/api/v2/publicholidays/2024/${countryCode}`;

// Add a progress bar
const spinner = ora('Loading holidays...').start();

setTimeout(() => {
    spinner.color = 'yellow';
    spinner.text = 'Loading holidays...';
}
    , 1000);

// Check if the user entered a country name
if (!country) {
    const message = chalk.red('Please enter a country name');
    const boxMessage = boxen(message, {
        padding: 1,
        margin: 1,
        align: 'center',
        borderStyle: 'round',
        borderColor: 'red'
    });
    spinner.stop();
    console.log(boxMessage);
    return;
}

if (!countryCode) {
    const message = chalk.red('Please enter a valid country name');
    const boxMessage = boxen(message, {
        padding: 1,
        margin: 1,
        align: 'center',
        borderStyle: 'round',
        borderColor: 'red'
    });
    spinner.stop();
    console.log(boxMessage);
    return;
}

if (countryCode && country) {
    const message = chalk.red(figlet.textSync(`Holidays in ${country}`));
    const boxMessage = boxen(message, {
        padding: 1,
        margin: 1,
        align: 'center',
        borderStyle: 'round',
        borderColor: 'green'
    });
    spinner.stop();
    console.log(boxMessage);

}

// Add a subtitle
const subtitle = chalk.yellow('A CLI for checking holidays in any country // Made by @Paztek ');

const boxSubtitle = boxen(subtitle, {
    margin: 1,
    padding: 1,
    align: 'center',
    justify: 'center',
    borderStyle: 'round',
    borderColor: 'yellow'
});

// Display the subtitle
console.log(boxSubtitle);

// Add a table
const table = new Table({
    head: ['Date', 'Name of the holiday'],
    colWidths: [30, 60],
    style: {
        border: ['green'],
        padding: 1,
        margin: 1,
        textAlign: 'center',
        head: ['red']   
    }
});



// DATA AND PUSH TO TABLE
axios.get(url)
    .then((res) => {
        const holidays = res.data;
        for (let holiday of holidays) {
            const date = holiday.date;
            const name = holiday.name;

            // Format the date
            const formattedDate = chalk.yellow(dateFormat(date, "dddd dS mmmm yyyy"));
                
            // Push the data to the table
            table.push([formattedDate, name]);
        }
        // Display the table
        const tableFinal = chalk.green(table.toString());
        const boxTable = boxen(tableFinal, {
            margin: 1,
            padding: 1,
            align: 'center',
            justify: 'center',
            borderStyle: 'round',
            borderColor: 'green'
        });
        console.log(boxTable);

        })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        spinner.stop();
    });






    








