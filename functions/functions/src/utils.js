const koboToNgn = (kobo) => (kobo / 100).toFixed(2);
const ngnToKobo = (ngn) => (ngn * 100).toFixed(2);
const getTransactionId = () => new Date().valueOf().toString();
module.exports = { koboToNgn, ngnToKobo, getTransactionId };
