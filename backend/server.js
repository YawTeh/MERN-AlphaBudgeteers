const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");

dotenv.config();

connectDB();

const transactions = require("./routes/transactionRoutes");

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

app.use("/api/v1/transactions", transactions);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("frontend/build"));

    app.get("*", (req, res) =>
        res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
    );
}

const PORT = process.env.PORT || 50000;

app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`
    )
);
