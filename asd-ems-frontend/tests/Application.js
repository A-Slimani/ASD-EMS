const handleApplication = (fname, lname, subcategory, reason, applicationdate) => {
    function isText(text) { return (/^[A-Za-z]+$/).test(text) }

    if (fname === "" || isText(fname) === false) { return false; }
    else if (lname === "" || isText(lname) === false) { return false; }
    else if (subcategory === "") { return false; }
    else if (reason === "") { return false; }
    else if (applicationdate === "") { return false; }
    else { return true; }
}

const handleComplaint = (fname, lname, complaintdescription, complaintdate) => {
    function isText(text) { return (/^[A-Za-z]+$/).test(text) }

    if (fname === "" || isText(fname) === false) { return false; }
    else if (lname === "" || isText(lname) === false) { return false; }
    else if (complaintdescription === "") { return false; }
    else if (complaintdate === "") { return false; }
    else { return true; }
}

const handleConcern = (name, methodachievement, achivementgoal, topic, discussdate) => {
    function isText(text) { return (/^[A-Za-z]+$/).test(text) }

    if (name === "" || isText(name) === false) { alert("Name field is empty or invalid format input"); }
    else if (methodachievement === "") { alert("Last field is empty"); }
    else if (achivementgoal === "") { alert("'What are you trying to achieve' field is empty"); }
    else if (topic === "" || isText(topic)) { alert("Topic field is empty"); }
    else if (discussdate === "") { alert("Date  must be select"); }
    else { onSubmit(); }
}

module.exports = handleConcern
module.exports = handleApplication;
module.exports = handleComplaint;