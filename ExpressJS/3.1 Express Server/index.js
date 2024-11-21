import express from "express"; // require()
const app = express();
const port = 7000;

app.listen(7000, () => {
    console.log(`Server is running on port ${port}.`);
});



/**
 * What is localhost? 
 * Localhost is simply when we don't have a server on the internet and instead, we want to host our server locally,
 * so making our own computer, the server of our website's backend. And that is the local part of our hosting.
 * 
 * What is Port?
 * The port is kind of equivalent to a bunch of doors on our server computer, and each of these doors have an address.
 * 
 */