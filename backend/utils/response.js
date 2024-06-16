// response.js
module.exports = (res, code, data) => {
    return res.status(code).json(data);
};
