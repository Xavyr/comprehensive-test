//Please explain the two TS errors

interface Point {
  readonly x: number;
  readonly y: number;
}

function logCoordinates(point: Point): void {
  point.x = "hello";
  console.log(`Coordinates: (${point.x}, ${point.y})`);
}

const param: Point = { x: 0, y: 0 };
const param2: Point = { x: [12], y: 99 };
logCoordinates(param);
