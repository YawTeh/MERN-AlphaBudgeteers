exports.getTransactions = (req, res, next) => {
    res.send("GET transactions");
};

exports.addTransactions = (req, res, next) => {
    res.send("POST transactions");
};

exports.deleteTransactions = (req, res, next) => {
    res.send("DELETE transactions");
};
