//void
function noop(): void {
  return;
}

//any
function hello(a: any) {
  a.b(); // OK
}

function hello2(a: unknown) {
  //   a.b(); // 에러: Object is of type 'unknown'.
}

//never
function fail(msg: string): never {
  throw new Error(msg);
}
