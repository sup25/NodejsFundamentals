

const http = require('http');

const apiEndpoint = 'http://api.openweathermap.org/data/2.5/weather?q=Kathmandu&APPID=8f8a93e05a369081a64d3fdfd06881f2';

http.get(apiEndpoint, (response) => {
    let data = "";

    response.on('data', (chunk) => {
        data += chunk;
    });

    response.on('end', () => {
        const weatherData = JSON.parse(data);
        console.log(weatherData);
    });

}).on('error', (error) => {
    console.log(`Error: ${error.message}`);
});
