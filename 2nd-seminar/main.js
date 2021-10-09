const sum = require("./sum");
const cal = require("./calculator");

const result = sum(1,3);
console.log("sum result: ", result);

const add = cal.add(1,3);
console.log("add result: ", add);
const sub = cal.subtract(1,3);
console.log("subtract result: ", sub);
const mul = cal.multiply(1,3);
console.log("multiply result: ", mul);
const div = cal.divide(1,3);
console.log("divide result: ", div);