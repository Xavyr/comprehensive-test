// What is the purpose of generics in TypeScript, and how are they used in this example?

// Can you think of a scenario where using generics would be beneficial in a real-world TypeScript project?

function swap<T>(arr: T[], index1: number, index2: number): void {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

const numArray: number[] = [1, 2, 3, 4];
swap(numArray, 0, 2);
console.log(numArray); // Output: [3, 2, 1, 4]

const strArray: string[] = ["apple", "banana", "cherry"];
swap(strArray, 1, 2);
console.log(strArray); // Output: ["apple", "cherry", "banana"]
