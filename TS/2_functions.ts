function add1(a: number, b: number) {
  return a + b;
}

const add2 = (a: number, b: number) => a + b;

//call signiture
type Add = (a: number, b: number) => number;
const add3: Add = (a, b) => a + b;

//overloading
//multiple different call signitures

type Add2 = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};

const add4: Add2 = (a, b) => a + b;

const add5: Add2 = (a, b) => {
  if (typeof b === "string") return a;
  return a + b;
};

//Next.js Route.push 예시
type Config = {
  path: string;
  state: object;
};
type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === "string") console.log(config);
  else {
    console.log(config.path, config.state);
  }
};

type Add3 = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

// const add6: Add3 = (a, b, c) => {
//   return a + b;
// };

const add7: Add3 = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

add7(1, 2);
add7(1, 2, 3);

//Polymorphism
type SuperPrint1 = {
  (arr: number[]): void;
  (arr: boolean[]): void;
  (arr: string[]): void;
  (arr: (number | boolean)[]): void;
};

const superPrint1: SuperPrint1 = (arr) => {
  arr.forEach((i) => console.log(i));
};

superPrint1([1, 2, 3, 4]);
superPrint1([true, false, true]);
superPrint1(["a", "b", "c"]);
superPrint1([1, 2, true, false]);

type SuperPrint2 = {
  <TypePlaceholder>(arr: TypePlaceholder[]): void;
};

const superPrint2: SuperPrint2 = (arr) => {
  arr.forEach((i) => console.log(i));
};

superPrint2([1, 2, 3, 4]);
superPrint2([true, false, true]);
superPrint2(["a", "b", "c"]);
superPrint2([1, 2, true, false]);
superPrint2([1, 2, true, false, "hello"]);

type SuperPrint3 = <T>(arr: T[]) => T;

const superPrint3: SuperPrint3 = (arr) => arr[0];

const a = superPrint3([1, 2, 3, 4]);
const b = superPrint3(["a", "b", "c"]);
const c = superPrint3([1, 2, true, false]);
const d = superPrint3([1, 2, true, false, "hello"]);
const e = superPrint3([true, false, true]);

type SuperPrint4 = <T, M>(arr: T[], b: M) => T;
const superPrint4: SuperPrint4 = (a) => a[0];

const f = superPrint4([1, 2, 3, 4], "x");
const g = superPrint4([1, 2, true, false, "hello"], []);

function superPrint5<V>(a: V[]) {
  return a[0];
}

const a5 = superPrint5<number>([1, 2, 3, 4]);
const b5 = superPrint5(["a", "b", "c"]);
const c5 = superPrint5([1, 2, true, false, "hello"]);

type Player<E> = {
  name: string;
  // extraInfo: any
  extraInfo: E;
};
// type NicoPlayer = Player<{ favFood: string }>;
type NicoExtra = { favFood: string };
type NicoPlayer = Player<NicoExtra>;
// const nico: Player<{ favFood: string }> = {
const nico: NicoPlayer = {
  name: "nico",
  extraInfo: {
    favFood: "bab",
  },
};

const jhin: Player<null> = {
  name: "jhin",
  extraInfo: null,
};

type A = Array<number>;
let arr: A = [1, 2, 3, 4];

// function printAllNumbers(arr: number[]) {}
function printAllNumbers(arr: Array<number>) {}
