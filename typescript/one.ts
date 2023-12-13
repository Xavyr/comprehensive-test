
// Please describe what an interface is?

// How would you describe the difference between `model` and `year`?

// Why are there red lines all over the function?

interface Car {
    brand: string;
    model: string;
    year?: number;
  }
  

  function getCarInfo(car: Car): undefined {
    if (car.year) {
      return `${car.brand} ${car.model} (${car.year})`;
    } else {
      return `${car.brand} ${car.model}`;
    }
  }
  
  
  const myCar: Car = { brand: "Toyota", model: "Camry" };
  console.log(getCarInfo(myCar));