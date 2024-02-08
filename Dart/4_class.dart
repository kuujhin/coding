//////////////////////////////////////
/////////// 1. Basic Class ///////////
//////////////////////////////////////
class Player1 {
  String name = 'jhin';
  final String realname = "kyungwon";
  int xp = 1500;

  void sayHello() {
    // name이라는 변수가 따로 정의 되지 않는이상 this.name 보다는 name으로 사용
    print("Hi my name is $name");
  }
}

void main1() {
  var player = Player1();
  player.name = 'lalala';
  print(player.name);
  // player.realname = 'ohohoh'; // 에러. final variable이므로
  player.sayHello();
}

//////////////////////////////////////
////////// 2. Constructors ///////////
//////////////////////////////////////
class Player2 {
  late final String name;
  late int xp;

  // Player2(String name, int xp) {
  //   this.name = name;
  //   this.xp = xp;
  // }

  // 더 간단하게 사용
  Player2(this.name, this.xp);

  void sayHello() {
    print("Hi my name is $name");
  }
}

void main2() {
  var player1 = Player2('jhin', 1500);
  player1.sayHello();
  var player2 = Player2('nico', 2500);
  player2.sayHello();
}

//////////////////////////////////////
// 3. Named Constructor Parameters ///
//////////////////////////////////////
class Player2 {