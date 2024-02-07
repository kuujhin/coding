/////////// 1. Defining a Function ///////////

// String sayHello(String name) {
//   return "Hello $name nice to meet you!";
// }

// fat arrow syntax
String sayHello(String name) => "Hello $name nice to meet you!";

num plus(num a, num b) => a + b;

void main() {
  print(sayHello('jhin'));
}
