/////////// 1. Defining a Function ///////////

// String sayHello(String name) {
//   return "Hello $name nice to meet you!";
// }

// fat arrow syntax
String sayHi(String name) => "Hello $name nice to meet you!";

num plus(num a, num b) => a + b;

void main1() {
  print(sayHi('jhin'));
}

/////////// 2. Named Parameters ///////////
String sayHello1(String name, int age, String country) {
  return "Hello $name, you are $age, and you come from $country";
}

// default value를 정해주어 null safety하게 함
String sayHello2(
    {String name = 'anon', int age = 99, String country = 'wakanda'}) {
  return "Hello $name, you are $age, and you come from $country";
}

// required 이용
String sayHello3(
    {required String name, required int age, required String country}) {
  return "Hello $name, you are $age, and you come from $country";
}

void main2() {
  // positional parameter가 3개 필요하지만 없으므로 에러
  // print(sayHello1()); //Error
  print(sayHello1('jhin', 24, 'korea'));
  print(sayHello2(
    age: 24,
    country: 'korea',
    name: 'jhin',
  ));
  print(sayHello2(
    age: 24,
  ));
  // default value로 출력
  print(sayHello2());

  // required value가 없으므로 에러
  // print(sayHello3());    //Error
  print(sayHello3(name: 'kuu', age: 44, country: 'Japan'));
}
