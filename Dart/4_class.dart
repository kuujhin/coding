class Player {
  String name = 'jhin';
  final String realname = "kyungwon";
  int xp = 1500;

  void sayHello() {
    // name이라는 변수가 따로 정의 되지 않는이상 this.name 보다는 name으로 사용
    print("Hi my name is $name");
  }
}

void main() {
  var player = Player();
  player.name = 'lalala';
  print(player.name);
  // player.realname = 'ohohoh'; // 에러. final variable이므로
  player.sayHello();
}
