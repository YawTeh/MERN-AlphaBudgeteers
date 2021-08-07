const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config();

const app = express();

app.get("/", (req, res) => res.send("Hello"));

const PORT = process.env.PORT || 50000;

app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`
    )
);
