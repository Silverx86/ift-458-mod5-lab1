// Student Name: Walker Bahlmann
// Student ID: 1216191028
// Date: 14 July, 2024

const express = require('express');
const app = express();
const loggerMiddleware = require("./loggerMiddleware")

app.use(express.json());

app.use(loggerMiddleware);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});