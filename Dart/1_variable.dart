void main() {
  /////////// 1. Hello World ///////////
  print('hello world');

  /////////// 2. Var Keyword ///////////
  // 자동으로 변수 타입 정해줌
  // 일반적으로 함수나 매소드 내에서 선언시 사용
  var varname = '경원';
  // 변수 타입을 정하여 선언
  // 일반적으로 Class에서 선언시 사용
  String stringname = '진';
  // 다른 타입으로 업데이트 할 시 에러
  // stringname = 1;
  // stringname = true;
  varname = 'kuu';
  stringname = 'jhin';
  print(varname);
  print(stringname);

  /////////// 3. Dynamic Type ///////////
  // 어떤 타입인지 모르는 경우
  // 필요한 경우에만 사용하는 것이 좋음
  var dynamicname;
  print(dynamicname);
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

  /////////// 4. Nullable Variable ///////////
  // Null Safety: null을 참조할 수 없도록 함
  String? nullablename = 'jhin';
  nullablename;
  nullablename = null;
  // null이 될수도 있는 값은 체크해주어야 함
  // nullablename.length;  // 에러
  if (nullablename != null) nullablename.length;
  nullablename?.length;

  /////////// 4. Final Variable ///////////
  // JS의 const 처럼 바뀌지 않는 변수
  final finalname = 'jhin';
  // final String realname = 'jhin'; // 필수는 아님
  print(finalname);
  // finalname = 'kuu'; // 에러

  /////////// 5. Late Variable ///////////
  // 초기 데이터 없이 변수 선언 가능
  // late String latename;
  late final String latename;
  // 값을 넣기 전에는 접근시 에러
  // print(latename); // 에러
  latename = 'jhin';
  print(latename);

  /////////// 6. Const Variable ///////////
  // compile-time const
  // 컴파일 할 때 알고 있어야 하는 값. ex) API_KEY
  // final은 APi로 얻은 값이나 사용자 입력 값 같이 나중에 오는 값
  // 앱에서 사용할 상수
  const constname = 'jhin';
  print(constname);
  // constname = '경원'; // 에러. 값 변경 불가
}
