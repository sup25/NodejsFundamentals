const fs = require('fs')
const http = require('http')

const server = http.createServer((req, res) => {

    const rstream = fs.createReadStream('input.txt')

    rstream.on("data", (chunkdata) => {
        res.write(chunkdata)
    })
    rstream.on("end", () => {
        res.end();
    })
    rstream.on("error", (err) => {
        console.log(err)
        res.end('file not found')
    })

    //using stream pipe
    rstream.pipe(res);

})

server.listen(2000, "127.0.0.1", () => {
    console.log('listening to port 2000')
})