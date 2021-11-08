const handleApplication = require('./Application');
const handleComplaint = require('./Application');
const handleConcern = require('./Application')

test("file a complaint with correct data format input", () => {
    const fname = "bob";
    const lname = "rob";
    const complaintdescription = "work issue";
    const complaintdate = "1/1/2020";
    expect(handleComplaint(fname, lname, complaintdescription, complaintdate)).toBe(true);
})

test("file a complaint with incorrect data format input - number in textfield", () => {
    const fname = "bob123";
    const lname = "rob123";
    const complaintdescription = "work issue";
    const complaintdate = "1/1/2020";
    expect(handleComplaint(fname, lname, complaintdescription, complaintdate)).toBe(false);
})

test("file a complaint with missing details", () => {
    const fname = "";
    const lname = "rob123";
    const complaintdescription = "work issue";
    const complaintdate = "1/1/2020";
    expect(handleComplaint(fname, lname, complaintdescription, complaintdate)).toBe(false)
})