const assert = require("assert");
const { forEach, map } = require("./index.js");

// const test = (desc, fn) => {
//   console.log("----", desc);
//   try {
//     fn();
//   } catch (err) {
//     console.log(err.message);
//   }
// };

it("The forEach test", () => {
  let sum = 0;
  forEach([1, 2, 3], value => {
    sum += value;
  });

  assert.strictEqual(sum, 6, "Expected forEach to sum the array");
});

it("The map function test", () => {
  const result = map([1, 2, 3], value => {
    return value * 2;
  });

    assert.strictEqual(result[0], 2, "Expected map to square the array");
    assert.strictEqual(result[1], 4, "Expected map to square the array");
    assert.strictEqual(result[2], 6, "Expected map to square the array");

  // or the below works also

  // assert.deepStrictEqual(result, [2, 4, 6]);
});
