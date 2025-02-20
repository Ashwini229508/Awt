
const http = require('http');
const express = require('express');
const app = express();


const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    if (req.url === '/html') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Welcome to HTTP Server</h1>');
    } else if (req.url === '/json') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: "Hello, JSON response!" }));
    } else {
        res.end('Hello, this is a text response!');
    }
});
server.listen(3000, () => console.log('HTTP Server running on port 3000'));

app.get('/', (req, res) => {
    res.send('Welcome to Express Server!');
});
app.get('/html', (req, res) => {
    res.send('<h1>Hello from Express!</h1>');
});
app.get('/json', (req, res) => {
    res.json({ message: 'Hello from Express JSON!' });
});
app.listen(3000, () => console.log('Express Server running on port 3000'));





























