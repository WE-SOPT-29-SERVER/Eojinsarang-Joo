function add(x, y) {
    return x + y;
  }
  console.log(add(2, 3));

  const addStr = function (x, y) {
    return x + y;
  };
  console.log(addStr("안녕", "하세요"));
  

const add1 = (x, y) => {
    return x + y;
}

const add2 = x => {
    return x;
}

const add3 = () =>{
    return 1;
}

const add4 = (x, y) => x + y;

const square = x => x * x;

const person = (name, age) => ({ name: name, age: age });

const person1 = function (name, age) {
  return {
    name: name,
    age: age,
  };
};