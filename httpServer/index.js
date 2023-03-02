//import http module
const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end('hello')
    } else if (req.url == "/about") {

        res.end("this is about page")
    } else {
        res.writeHead(404, { 'Content-type': "text/html" });
        res.end("<h1>404 page doesnot exist</h1>")
    }

})

//listen the request
server.listen(2000, "127.0.0.1", () => {
    console.log('listening to port 2000')
})
