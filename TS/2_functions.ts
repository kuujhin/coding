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

const add6: Add3 = (a, b, c) => {
  return a + b;
};
const add7: Add3 = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

add7(1, 2);
add7(1, 2, 3);
