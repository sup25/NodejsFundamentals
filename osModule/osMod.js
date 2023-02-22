//to know your os arch
const os = require('os')
console.log(os.arch())

//know your hostname (desktop_name)
console.log(os.hostname())

//know your platform
console.log(os.platform())

//to see free memory(ram)
const freeMemo = os.freemem();

//bytes to gb
console.log(`${freeMemo / 1024 / 1024 / 1024}`)

const totalMemo = os.totalmem();
//bytes to gb
console.log(`${totalMemo / 1024 / 1024 / 1024}`)