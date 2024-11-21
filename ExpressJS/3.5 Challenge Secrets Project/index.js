//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming


import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 8000;
let isAuthorized = false;

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.use(express.urlencoded({ extended: true}));

function handlePasswordCheck(req, res, next) {
    console.log(req.body);
    isAuthorized = req.body.password === 'ILoveProgramming';
    next();
}
app.use(handlePasswordCheck);

app.post('/check', (req, res) => {
    if (isAuthorized) {
        res.sendFile(__dirname + "/public/secret.html")
    } else {
        res.sendFile(__dirname + "/public/index.html")
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})