const handleSubmit = (fname, lname, dob, username, pwd, phoneno, accname, accnum, accbsb, address, suburb, state, pcode, employtype, employdate, dept) => {
    function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); }
    function isName(name) { return /^-?[a-zA-Z0-9._%+-]+@EMS[HR,OP,MK,FN]{2}$/.test(name); }
    function isText(text) { return (/^[A-Za-z]+$/).test(text) }

    if (fname === "" || isText(lname) === false) { return false; }
    else if (lname === "" || isText(lname) === false) { return false; }
    else if (dob === "") { return false; }
    else if (username === "" || isName(username) === false) { return false; }
    else if (pwd === "") { return false; }
    else if (phoneno === "" || isNumber(phoneno) === false) { return false; }
    else if (accname === "" || isText(accname) === false) { return false; }
    else if (accnum === "" || isNumber(accnum) === false) { return false; }
    else if (accbsb === "" || isNumber(accbsb) === false) { return false; }
    else if (address === "") { return false; }
    else if (suburb === "" || isText(suburb) === false) { return false; }
    else if (state === "" || isText(state) === false) { return false; }
    else if (pcode === "" || isNumber(pcode) === false) { return false; }
    else if (employtype === "") { return false; }
    else if (employdate === "") { return false; }
    else if (dept === "") { return false; }
    else if (dob > employdate) { return false; }
    else if ((new Date().getFullYear() - new Date(dob).getFullYear()) <= 18) { return false; }
    else { return true; }
}

module.exports = handleSubmit;

