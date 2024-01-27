const transferIn10 = require('./transferIn10');
test('6 transfered to 6', () => {
    expect(transferIn10("||||||")).toBe("6");
  });
test('0 transfered to 0', () => {
    expect(transferIn10("")).toBe("0");
  });
test('15 transfered to 15', () => {
  expect(transferIn10("|".repeat(15))).toBe("15");
});
test('40 transfered to 40', () => {
  expect(transferIn10("|".repeat(40))).toBe("40");
});
test('135 transfered to 135', () => {
  expect(transferIn10("|".repeat(135))).toBe("135");
});
test('934 transered to 934', () => {
  expect(transferIn10("|".repeat(934))).toBe("934");
});
