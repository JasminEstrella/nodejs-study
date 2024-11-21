    const http = require('http');

    const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/data') {
        let body = '';

        req.on('data', chunk => {
        body += chunk.toString(); // Convert Buffer to string
        });

        req.on('end', () => {
        console.log('Received data:', body);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Data received successfully' }));
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
    });

    const port = 4300;
    server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    });
