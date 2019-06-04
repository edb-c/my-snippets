/*
Challenge
Write a function that will take in a number.
The function should return an array containing the fibonacci sequence up to but not including that number.
The Array returned by fibonacciSequence should contain the fibonacci numbers in ascending order starting with 0.
If the number is less than 1 return an empty Array.
*/
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89

var fibonacciSequence = function(num) {
  var fibonacciSequenceArray = [];

  var result = 0;
  var int1 = -1;
  var int2 = 1;

  if (num < 1) {
    return fibonacciSequenceArray;
  } else {
    //fibonacciSequenceArray.push(0);
    //fibonacciSequenceArray.push(1);

    for (i = 0; i <= num; i++) {
      result = int1 + int2;

      int1 = int2;
      int2 = result;

      if (result < num) {
        //  console.log(result , i, num);

        fibonacciSequenceArray.push(result);
      }
    }
    return fibonacciSequenceArray;
  }
};

fibonacciSequence(3);
