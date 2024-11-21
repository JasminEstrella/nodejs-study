import express from "express";
import morgan from "morgan";  // HTTP request logger middleware

const app = express();
const port = 8000;

app.use(morgan("tiny"));

// app.use((req, res,next) => {
//   console.log("Request method: ", req.method, req.url);
//   next();
// })

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
