const handleSubmit = require('./Login');

test("login using admin username", () => {
    const admin = "abc@EMSHR";
    expect(handleSubmit(admin)).toBe(true);
})

test("login using employee username", () => {
    const employee = "def@EMSOP";
    expect(handleSubmit(employee)).toBe(true);
})

test("login using invalid username", () => {
    const invalid = "ghi@EMSJK"
    expect(handleSubmit(invalid)).toBe(false);
})
