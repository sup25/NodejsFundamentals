//import http module
const http = require('http')

const server = http.createServer((req, res) => {
    res.end('hello')
})

//listen the request
server.listen(2000, "127.0.0.1", () => {
    console.log('listening to port 2000')
})
