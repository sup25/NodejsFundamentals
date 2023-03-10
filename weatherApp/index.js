const fs = require('fs')
const http = require('http');
const homeFile = fs.readFileSync("home.html", 'utf-8')

const replaceVal = (tempVal, orgVal) => {
    let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp)
    temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min)
    temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max)
    temperature = temperature.replace("{%location%}", orgVal.name)
    temperature = temperature.replace("{%country%}", orgVal.sys.country)
    temperature = temperature.replace("{%tempstatus%}", orgVal.weather[0].main)
    return temperature
}


const apiEndpoint = 'http://api.openweathermap.org/data/2.5/weather?q=Kathmandu&APPID=8f8a93e05a369081a64d3fdfd06881f2&units=metric';

const server = http.createServer((req, res) => {
    function css(request, response) {
        if (request.url === '/home.css') {
            response.writeHead(200, { 'Content-type': 'text/css' });
            var fileContents = fs.readFileSync('styles.css', { encoding: 'utf8' });
            response.write(fileContents);
        }
    }
    http.get(apiEndpoint, (resp) => {
        let data = "";

        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {
            const weatherData = JSON.parse(data);
            const arrData = [weatherData]

            const realTimeData = arrData.map((val) => replaceVal(homeFile, val)).join("")

            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(realTimeData)
            res.end()

        });

    })
        .on('error', (error) => {
            console.log(`Error: ${error.message}`);
        });
})

server.listen(2000, () => {
    console.log('Server running on http://localhost:2000')
})
