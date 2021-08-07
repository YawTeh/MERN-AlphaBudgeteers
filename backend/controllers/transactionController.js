exports.getTransactions = (req, res, next) => {
    res.send("GET transactions");
};

exports.addTransaction = (req, res, next) => {
    res.send("POST transactions");
};

exports.deleteTransaction = (req, res, next) => {
    res.send("DELETE transactions");
};
