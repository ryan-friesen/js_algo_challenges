// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple/

function smallestCommons(rangeArr) {

  const sortedRange = rangeArr.slice(); // [...rangeArr]

  sortedRange.sort(function (a, b) {
    return a - b;
  });

  let largest = sortedRange[1];
  let multiplier = sortedRange[0];
  let product = multiplier * largest;

  let isDivisible = isDivisibleByRange(product, sortedRange);

  while (isDivisible === false) {

    multiplier++;
    product = multiplier * largest;
    isDivisible = isDivisibleByRange(product, sortedRange);

  }
  return product;
}


function isDivisibleByRange(num, range) {

  let n = range[0];

  while (n <= range[1]) {

    if (num % n !== 0)
      return false;
    n++;
  }
  return true;
}
