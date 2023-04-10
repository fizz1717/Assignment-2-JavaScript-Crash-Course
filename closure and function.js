function adder(x) {
    return function(y) {
      return x + y;
    }
  }
  let addFive = adder(5);
  console.log(addFive(3)); // outputs 8
  console.log(addFive(10)); // outputs 15