/*
const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// system up time in seconds.

const time = os.uptime()
console.log(time)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs)
*/

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our homepage.')
    }
    else if (req.url === '/about') {
        res.end('Here is our short history.')
    }
    else {
        res.end(`
            <h1>Oops!</h1>
            <p>We can't seem to find the page you are looking for</p>
            <a href="/">back home</a>
        `)
    }
})

server.listen(5000)

