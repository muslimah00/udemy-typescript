// ===== GENERIC CLASS =====

class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number | undefined {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string | undefined {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T | undefined {
    return this.collection[index];
  }
}

const arr = new ArrayOfAnything(['a', 'b', 'c']);

// ===== GENERIC FUNCTION =====

function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(['a', 'b', 'c']);

// ===== GENERIC CONSTRAINTS =====

class Car {
  print() {
    console.log('I am a car');
  }
}

class House {
  print() {
    console.log('I am a house');
  }
}

interface Printable {
  print(): void;
}

// ✅ FIXED: Use for...of instead of for loop
function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (const item of arr) {
    item.print();
  }
}

printHousesOrCars<House>([new House(), new House()]);
printHousesOrCars<Car>([new Car(), new Car()]);