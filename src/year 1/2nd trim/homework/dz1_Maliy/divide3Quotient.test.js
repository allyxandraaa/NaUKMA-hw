const divide3Quotient = require('./divide3Quotient');
test('6 div 3', () => {
    expect(divide3Quotient("||||||")).toBe("||");
  });
test('7 div 3', () => {
    expect(divide3Quotient("|||||||")).toBe("||");
});
test('8 div 3', () => {
    expect(divide3Quotient("||||||||")).toBe("||");
});
test('0 div 3', () => {
    expect(divide3Quotient("")).toBe("");
});
test('50 div 3', () => {
    expect(divide3Quotient("|".repeat(50))).toBe("|".repeat(16));
});
test('100 div 3', () => {
    expect(divide3Quotient("|".repeat(100))).toBe("|".repeat(33));
});