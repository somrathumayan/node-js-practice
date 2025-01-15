const http = require("http");

// creating server
const server = http.createServer((req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, Node.js Server!');
});


// server listen 
server.listen(3000, () => {
    console.log('Server is running..')
});