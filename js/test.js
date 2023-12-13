// 1.  declare a variable called "numArr" which is an array containing the numbers 1, 2, and 3. then print it to the console

// 2. define a function "multiplyBy2" that takes one number, multiplies it by 2, and returns that value

// 3. define a function "distanceFrom10" that takes one number and returns its distance from 10.
// The output should be >= 0 (e.g. passing 8 or 12 should both return a positive 2

// 4. define a function "map" which takes two arguments, an array and a callback function.
// "map" will iterate/loop through the array and pass each array element to the callback as an argument.
// Each output from the callback is pushed to a new array. "map" will return this new array. Please do not use the native .map() method.

// 5. use your "map" to find the distance from 10 of each number in numArr

// 6. define a function called “neither” which takes two arguments, an array and a callback function.
// This callback can be considered a "test", as it will return true or false.
// "neither" will iterate/loop through the array and pass each array element to the callback as an argument.
// if all outputs from the callback/test are “false”, neither will return true.
// if any of the outputs is “true”, neither will return false. Please do not use the native methods.

// 7. use your "neither" to determine if every number in numArr is greater than 0.
// Then, run a second test with the array [-1, -2, -3]. Lastly, run a third test with array [1, 2, -3].

// 8. Write a function that takes in an object of key value pairs and returns a new object where the values are now the keys and the keys are now the values
// const testObject = {
//   dictionary: “ten”,
//   car: “three”,
//   book: “four”,
//   apple: “five”
// }

// 9. Write a function that takes in an object and returns an array of arrays in which each sub array has two values...the first
// being the length of the key and the second being the lenght of the value.
// const testObject = {
//   dictionary: “ten”,
//   car: “three”,
//   book: “four”,
//   apple: “five”
// }

// 10. Write a function that takes in an array and returns a new array in which each element is multiplied by its index and any resulting product
// of such multiplication is filtered out of the final result if the product is odd. //const testArr = [9, 10, 17, 21, 0]
// Please use both the native .map and .filter here

// 11. define a function "cacheMe" that takes one argument, a function, and returns a function.
// When invoked, cacheMe creates a cache that tracks calls to the returned function, where each input is associated with its output.
// Every subsequent call to that returned function with the same argument will return the output directly from the cache,
// instead of invoking the original function again.

// 12. define a function 'getLength' that takes an array and returns its length.
// getLength should not use the built-in .length property, while-loops, for-loops or higher-order functions
