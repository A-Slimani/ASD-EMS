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

test("voice concern with correct data format input", () => {
    const name = "bob";
    const methodachievement = "rob";
    const achivementgoal = "slow work progress";
    const topic = "general";
    const discussdate = "1/1/2020";
    expect(handleConcern(name, methodachievement, achivementgoal, topic, discussdate)).toBe(true);
})

test("voice concern with incorrect data format input - number in textfield", () => {
    const name = "bob123 wrong data";
    const methodachievement = "rob123 wrong data";
    const achivementgoal = "slow work progress";
    const topic = "general123 wrong data";
    const discussdate = "1/1/2020";
    expect(handleConcern(name, methodachievement, achivementgoal, topic, discussdate)).toBe(false);
})
