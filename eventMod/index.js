//using inbuilt module
const EventEmitter = require('events')

const event = new EventEmitter();

event.on("connection", (sc, msg) => {
    console.log(`status code is ${sc}, ${msg}`)
})

event.emit('connection', 200, "someone connected!")