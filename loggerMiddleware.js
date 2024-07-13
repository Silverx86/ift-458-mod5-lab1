// Student Name: Walker Bahlmann
// Student ID: 1216191028
// Date: 14 July, 2024

const loggerMiddleware = (req, res, next) => {
    console.log(new Date().toISOString(), "-", "Request of", req.method, "at location", req.url);
    next();
};

module.exports = loggerMiddleware;