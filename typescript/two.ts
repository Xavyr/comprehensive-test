
// Please describe why this is valid Typescript, touching on all five core pieces of functionality...

interface Shape {
  color: string;
}


interface Square extends Shape {
  sideLength: number;
}


function draw(shape: Shape): void {
  console.log(`Drawing a ${shape.color} shape.`);
}


const redSquare: Square = { color: "red", sideLength: 5 };
draw(redSquare);
