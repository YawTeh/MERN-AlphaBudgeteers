const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config();

const transactions = require("./routes/transactionRoutes");

const app = express();

app.use("/api/v1/transactions", transactions);

const PORT = process.env.PORT || 50000;

app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`
    )
);
