const handlePayroll = require('./payroll');

test("create payroll with correct data input", () => {
    const fname = "bob";
    const lname = "rob";
    const amount = "1000";
    const bonus = "1000";
    const description = "salary";
    const paydate = "1/1/2019";
    expect(handlePayroll(fname, lname, amount, bonus, description, paydate)).toBe(true);
})

test("create payroll with incorrect data input - text entered into number field", () => {
    const fname = "bob";
    const lname = "rob";
    const amount = "wrong data";
    const bonus = "wrong data";
    const description = "salary";
    const paydate = "1/1/2020";
    expect(handlePayroll(fname, lname, amount, bonus, description, paydate)).toBe(false);
})

test("create payroll with incorrect data input - number entered into textfield", () => {
    const fname = "123 bob";
    const lname = "123 rob";
    const amount = "1000";
    const bonus = "1000";
    const description = "123 salary";
    const paydate = "1/1/2020";
    expect(handlePayroll(fname, lname, amount, bonus, description, paydate)).toBe(false);
})

test("create payroll with incorrect date input, pay date create cannot be more than 3 years ago", () => {
    const fname = "bob";
    const lname = "rob";
    const amount = "1000";
    const bonus = "1000";
    const description = "salary";
    const paydate = "1/1/2010";
    expect(handlePayroll(fname, lname, amount, bonus, description, paydate)).toBe(false);
})

