import 'dart:ffi';
import 'dart:svg';

void main() {
  /////////// 1. Hello World ///////////
  print('hello world');

  /////////// 2. Var Keyword ///////////
  // 자동으로 변수 타입 정해줌
  // 일반적으로 함수나 매소드 내에서 선언시 사용
  var name = '경원';
  // 변수 타입을 정하여 선언
  // 일반적으로 Class에서 선언시 사용
  String lastname = '진';
  // 다른 타입으로 업데이트 할 시 에러
  // name = 1;
  // name = true;
  name = 'kuu';
  lastname = 'jhin';

  /////////// 3. Dynamic Type ///////////
  // 어떤 타입인지 모르는 경우
  // 필요한 경우에만 사용하는 것이 좋음
  var dynamicname;
  dynamic dynamicvariable;

  dynamicname = 'nico';
  dynamicname = 12;
  dynamicname = true;

  // 타입이 정해지는 블럭에서는 해당 타입의 매서드 사용 가능
  if (dynamicvariable is String) {
    dynamicvariable.length;
  }
  if (dynamicvariable is int) {
    dynamicvariable.isOdd;
  }
}
