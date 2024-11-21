/**
 * What is HTTP?
 * 
 * Hyper Text Transfer Protocol
 * The first part you already know because it stands for HyperText, just like HTML stands for hypertext.
 * The second part, the Transfer Protocol basically describes this as a language, a language that allows
 * computers to talk to each other across the Internet.
 * 
 * In order to communicate between the client-side and server-side, we're making these HTTP requests that
 * come from the client to the server.
 * 
 * GET - request resource, request data from server 
 * POST - sending resource, send data to server to process or save, etc
 * PUT - replace a resource with whatever it is you're sending over
 * PATCH - patch-up a resource
 * DELETE - deletes a resource, either from a server or database (this is a request from client-side)
 * 
 */

import express from "express";
const app = express();
const port = 7001;

app.get("/", (req, res) => {
    // console.log(req.rawHeaders)
    res.send('<h1>Hello World</h1>');

    // my browser http://localhost:7001/ sends the request to my server and because my server is running and listening and it knows how to handle
    // the GET request, it sends Hello World back, and that's what you'll see on the web page.
});

app.get("/about", (req,res) => {
    res.send('<h1>About Me</h1>');
});

app.get("/contact", (req,res) => {
    res.send('<h1>Contact</h1>');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})