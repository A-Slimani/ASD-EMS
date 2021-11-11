const handlePayroll = (fname, lname, amount, bonus, description, paydate) => {
    function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); }
    function isText(text) { return (/^[A-Za-z]+$/).test(text) }

    if (fname === "" || isText(fname) === false) { return false; }
    else if (lname === "" || isText(lname) === false) { return false; }
    else if (amount === "" || isNumber(amount) === false) { return false; }
    else if (bonus === "" || isNumber(bonus) === false) { return false; }
    else if (description === "") { return false; }
    else if ((new Date().getFullYear() - new Date(paydate).getFullYear()) >= 3) { return false; }
    else { return true; }
};

module.exports = handlePayroll;
