
const http = require('http');  // Import the http module

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' }); // Set the response header
    res.end('Hello, World!\n'); // Send response
});

const port = 3000;
    server.listen(port, () => {
    console.log(`Server running at http:localhost:${port}`);
});


// ============
// const http = require('http');
// const fs = require('fs'); // File system module to read files

// const server = http.createServer((req, res) => {
//   fs.readFile('index.html', (err, data) => { // Read the HTML file
//     if (err) {
//       res.writeHead(500, { 'Content-Type': 'text/plain' });
//       res.end('Error reading the file');
//     } else {
//       res.writeHead(200, { 'Content-Type': 'text/html' });
//       res.end(data); // Send the HTML file as a response
//     }
//   });
// });

// const port = 3000;
// server.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

// ============

// const http = require('http');

// const server = http.createServer((req, res) => {
//   if (req.method === 'GET' && req.url === '/api/data') {
//     const data = { message: 'Hello from the API' };
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify(data)); // Respond with JSON data
//   } else {
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end('Not Found');
//   }
// });

// const port = 3000;
// server.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });


// ============
// const http = require('http');
// const { parse } = require('querystring'); // To parse query strings

// const server = http.createServer((req, res) => {
//   if (req.method === 'POST' && req.url === '/api/data') {
//     let body = '';
//     req.on('data', chunk => {
//       body += chunk; // Collect the data chunks
//     });

//     req.on('end', () => {
//       const parsedData = JSON.parse(body); // Parse the JSON body
//       res.writeHead(200, { 'Content-Type': 'application/json' });
//       res.end(JSON.stringify({ received: parsedData })); // Send back the received data
//     });
//   } else {
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end('Not Found');
//   }
// });

// const port = 3000;
// server.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });



// ============
// const fs = require('fs');

// // Write to a file
// fs.writeFile('example.txt', 'Hello, Node.js!', (err) => {
//   if (err) throw err;
//   console.log('File has been written!');
// });

// // Read from a file
// fs.readFile('example.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log('File content:', data); // Display file content
// });

// ============
// const http = require('http');
// const url = require('url'); // To parse the request URL

// const server = http.createServer((req, res) => {
//   const parsedUrl = url.parse(req.url, true); // Parse the URL with query string
//   const name = parsedUrl.query.name || 'Guest'; // Get the name from the query parameter

//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end(`Hello, ${name}!`); // Respond with a greeting
// });

// const port = 3000;
// server.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });


// ============
// const http = require('http');

// const server = http.createServer((req, res) => {
//   if (req.url === '/home') {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Welcome to the homepage!');
//   } else if (req.url === '/about') {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('This is the about page.');
//   } else {
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end('Page not found');
//   }
// });

// const port = 3000;
// server.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });



// ============
// These examples demonstrate some of the most basic and common tasks in Node.js, such as:

// - Creating HTTP servers
// - Handling different types of HTTP requests (GET, POST)
// - Serving static files
// - Reading and writing to files
// - Handling query parameters
// - Building simple APIs

// These should help you get started with Node.js and understanding its capabilities. As you progress, you can build more complex applications and add frameworks like Express.js to simplify development.