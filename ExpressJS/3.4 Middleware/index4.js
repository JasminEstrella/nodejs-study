import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 8000;
var bandname = '';

app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("tiny"));

app.get("/", (req,res) => {
  res.sendFile(__dirname + '/public/index.html');
})

app.use((req, res, next) => {

  bandname = req.body.street + " " + req.body.pet;
  next();
})

app.post("/submit", (req,res) => {
  res.send(`Your bandname is: <br> ${bandname}! ✨`);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
