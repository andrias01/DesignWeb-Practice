console.log("Hello, Worl!");

// union type
type stateLoading = "loading";
type stateError = "error";

let loading: stateLoading = "loading";
let error: stateError = "error";

type state = stateLoading | stateError;

let state: state = loading;

console.log(state);

type movie = {
  title: string;
  duration: number;
  hasOscars: boolean;
}

type book = {
    title: string;
    pages: number;
}

//intersection type
type movieBook = movie & book ;
let movieBook: movieBook = {
  title: "The Lord of the Rings",
  duration: 120,
  hasOscars: true,
  pages: 500
}

console.log(movieBook);

//functions
function add(a: number, b: number): number {
  return a + b;
}

let sum = add(5, 10);
console.log(sum);

//arrow function
const multiply = (a: number, b: number): number => {
  return a * b;
}

let product = multiply(5, 10);
console.log(product);

const toUpperCase = (str: string): string => {
  return str.toUpperCase();
}
let upperStr = toUpperCase("hello world");
console.log(upperStr);

//DOM manipulation
const title = document.querySelector("h1");
// if (title) {
//   title.textContent = "Hello TypeScript";
// }
console.log(title?.textContent);

const h1 = document.querySelector(".title") as HTMLHeadingElement;
console.log(h1.textContent);

const input = document.querySelector("#username") as HTMLInputElement;
console.log(input.placeholder);

//Generics
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}
const numArray = [1, 2, 3];
const strArray = ["a", "b", "c"];
let firstNumber = getFirstElement<number>(numArray);
console.log(firstNumber); // 1
let firstString = getFirstElement<string>(strArray);
console.log(firstString); // "a"

const username = document.querySelector<HTMLInputElement>("#username");
console.log(username?.placeholder);

//classes
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const person = new Person("Alice", 30);
console.log(person.greet());

//Herence
class Employee extends Person {
  position: string;

  constructor(name: string, age: number, position: string) {
    super(name, age);
    this.position = position;
  }

  greet(): string {
    return `${super.greet()} I work as a ${this.position}.`;
  }
}   
const employee = new Employee("Bob", 25, "Software Engineer");
console.log(employee.greet());

//Interfaces
interface Animal {
  name: string;
  sound(): string;
}
class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sound(): string {
    return "Woof!";
  }
}
const dog = new Dog("Buddy");
console.log(`${dog.name} says ${dog.sound()}`);

//interfaces with generics
interface Repository<T> {
  add(item: T): void;
  getAll(): T[];
}
class InMemoryRepository<T> implements Repository<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}
const userRepository = new InMemoryRepository<{ name: string; age: number }>();
userRepository.add({ name: "Charlie", age: 28 });
userRepository.add({ name: "Diana", age: 22 });
console.log(userRepository.getAll());
