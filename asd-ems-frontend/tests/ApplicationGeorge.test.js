const handleApplication = require('./Application');

const handleComplaint = require('./Application');

const handleConcern = require('./Application')



test("launch application with correct data input", () => {

    const fname = "bob";

    const lname = "rob";

    const subcategory = "apply for leave";

    const reason = "holiday leave";

    const applicationdate = "1/1/2020";

    expect(handleApplication(fname, lname, subcategory, reason, applicationdate)).toBe(true);

})



test("launch application with incorrect data input - number input into textfield", () => {

    const fname = "bob123";

    const lname = "rob123";

    const subcategory = "apply for leave";

    const reason = "holiday leave";

    const applicationdate = "1/1/2020";

    expect(handleApplication(fname, lname, subcategory, reason, applicationdate)).toBe(false);

})

test("launch application with incorrect data input - number input into textfield", () => {

    const fname = "2345234";

    const lname = "rob123";

    const subcategory = "apply for leave";

    const reason = "holiday leave";

    const applicationdate = "1/1/2020";

    expect(handleApplication(fname, lname, subcategory, reason, applicationdate)).toBe(false);

})


