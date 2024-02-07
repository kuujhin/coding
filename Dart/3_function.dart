/////////// 1. Defining a Function ///////////

// String sayHello(String name) {
//   return "Hello $name nice to meet you!";
// }

// fat arrow syntax
String sayHello11(String name) => "Hello $name nice to meet you!";

num plus(num a, num b) => a + b;

void main1() {
  print(sayHello11('jhin'));
}

/////////// 2. Named Parameters ///////////
String sayHello21(String name, int age, String country) {
  return "Hello $name, you are $age, and you come from $country";
}

// default value를 정해주어 null safety하게 함
String sayHello22({
  String name = 'anon',
  int age = 99,
  String country = 'wakanda',
}) {
  return "Hello $name, you are $age, and you come from $country";
}

// required 이용
String sayHello23({
  required String name,
  required int age,
  required String country,
}) {
  return "Hello $name, you are $age, and you come from $country";
}

void main2() {
  // positional parameter가 3개 필요하지만 없으므로 에러
  // print(sayHello1()); //Error
  print(sayHello21('jhin', 24, 'korea'));
  print(sayHello22(
    age: 24,
    country: 'korea',
    name: 'jhin',
  ));
  print(sayHello22(
    age: 24,
  ));
  // default value로 출력
  print(sayHello22());

  // required value가 없으므로 에러
  // print(sayHello23());    //Error
  print(sayHello23(name: 'kuu', age: 44, country: 'Japan'));
}

/////////// 3. Optional Positional Parameters ///////////
// country는 required 하지 않고 default value가 주어진다
String sayHello31(String name, int age, [String? country = 'cuba']) =>
    'Hello $name, you are $age years old from $country';

void main3() {
  print(sayHello31('jhin', 12));
}

/////////// 3. QQ Operator ///////////
String capitalizeName1(String? name) {
  if (name != null) {
    return name.toUpperCase();
  }
  return 'ANON';
}

String capitalizeName2(String? name) =>
    name != null ? name.toUpperCase() : 'ANON';

// Question Question Operator (??)
// left ?? right
// left가 null 이라면 right를 return
// left가 null 이 아니라면 left를 return
String capitalizeName3(String? name) => name?.toUpperCase() ?? 'ANON';
void main() {
  capitalizeName3('jhin');
  capitalizeName3(null);

  String? name;
  name ??= 'nico';
  name = null;
  name ??= 'jhin';
  print(name);
}
