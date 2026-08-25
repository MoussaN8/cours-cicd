const { addition } = require("./index");

test("additionne correctement deux nombres", () => {
  expect(addition(2, 3)).toBe(5);
});
