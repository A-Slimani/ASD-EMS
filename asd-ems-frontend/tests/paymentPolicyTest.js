const handlePayroll = require('./paymentPolicy');

test("create payroll with the minimum amount of html", () => {
    const data = "<p>Test page</p>";
    expect(handlePaymentPolicy(data)).toBe(true);
})

test("testing if h1, p, ul, li, i and b tags work", () => {
    const data = `
        <h1>Payment Policy</h1>
        <p>Test paragraph</p>
        <ul>
            <li>test dot point</li>
        </ul>
        <i>Test italics</i>
        <b>Test bold</b>
    `
    expect(handlePaymentPolicy(data)).toBe(true);
})

test("testing that the payment policy should not be empty", () => {
    const data = "";
    expect(handlePaymentPolicy(data)).toBe(true);
})