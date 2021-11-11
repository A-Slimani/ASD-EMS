const handleSubmit = require('./User');

test("create user with correct data input", () => {
    const fname = "bob";
    const lname = "rob";
    const dob = "1/1/1950";
    const username = "bobrob@EMSHR";
    const pwd = "abc123";
    const phoneno = "123456789";
    const accname = "bobrob";
    const accnum = "12345";
    const accbsb = "12345";
    const address = "1 ultimo";
    const suburb = "ultima";
    const state = "nsw";
    const pcode = "1234";
    const employtype = "full-time";
    const employdate = "1/1/2021";
    const dept = "HR";
    expect(handleSubmit(fname, lname, dob, username, pwd, phoneno, accname, accnum, accbsb, address, suburb, state, pcode, employtype, employdate, dept)).toBe(true);
})

test("create user with wrong data input, number input in all textfield", () => {
    const fname = "1";
    const lname = "2";
    const dob = "abc@EMSHR";
    const username = "abc@EMSHR";
    const pwd = "abc@EMSHR";
    const phoneno = "abc@EMSHR";
    const accname = "3";
    const accnum = "abc@EMSHR";
    const accbsb = "abc@EMSHR";
    const address = "abc@EMSHR";
    const suburb = "4";
    const state = "5";
    const pcode = "6";
    const employtype = "7";
    const employdate = "abc@EMSHR";
    const dept = "8";
    expect(handleSubmit(fname, lname, dob, username, pwd, phoneno, accname, accnum, accbsb, address, suburb, state, pcode, employtype, employdate, dept)).toBe(false);
})

test("create user with wrong data input, text input in all number field", () => {
    const fname = "name";
    const lname = "name";
    const dob = "1/1/2020";
    const username = "abc@EMSHR";
    const pwd = "abc123";
    const phoneno = "wrong data";
    const accname = "abc";
    const accnum = "wrong data";
    const accbsb = "wrong data";
    const address = "abc@EMSHR";
    const suburb = "1abc";
    const state = "abc";
    const pcode = "wrong data";
    const employtype = "abc";
    const employdate = "1/1/2021";
    const dept = "HR";
    expect(handleSubmit(fname, lname, dob, username, pwd, phoneno, accname, accnum, accbsb, address, suburb, state, pcode, employtype, employdate, dept)).toBe(false);
})

test("create user with wrong data input, incorrect date format - user must be at least 18 years old", () => {
    const fname = "bob";
    const lname = "rob";
    const dob = "1/1/2020";
    const username = "bobrob@EMSHR";
    const pwd = "abc123";
    const phoneno = "123456789";
    const accname = "bobrob";
    const accnum = "12345";
    const accbsb = "12345";
    const address = "1 ultimo";
    const suburb = "ultima";
    const state = "nsw";
    const pcode = "1234";
    const employtype = "full-time";
    const employdate = "1/1/2021";
    const dept = "HR";
    expect(handleSubmit(fname, lname, dob, username, pwd, phoneno, accname, accnum, accbsb, address, suburb, state, pcode, employtype, employdate, dept)).toBe(false);
})

test("create user not following the requried username format", () => {
    const fname = "bob";
    const lname = "rob";
    const dob = "1/1/2020";
    const username = "bobrob@hello";
    const pwd = "abc123";
    const phoneno = "123456789";
    const accname = "bobrob";
    const accnum = "12345";
    const accbsb = "12345";
    const address = "1 ultimo";
    const suburb = "ultima";
    const state = "nsw";
    const pcode = "1234";
    const employtype = "full-time";
    const employdate = "1/1/2021";
    const dept = "HR";
    expect(handleSubmit(fname, lname, dob, username, pwd, phoneno, accname, accnum, accbsb, address, suburb, state, pcode, employtype, employdate, dept)).toBe(false);
})
