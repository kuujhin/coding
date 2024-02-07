void main() {
  /////////// 1. Basic Data Types ///////////
  String name = "jhin";
  bool alive = true;
  int age = 24;
  double money = 9.99;
  // num은 integer double 모두 가능
  num x = 12;
  x = 1.1;
  print(name +
      alive.toString() +
      age.toString() +
      money.toString() +
      x.toString());

  /////////// 2. Lists ///////////
  var numbers = [1, 2, 3, 4];
  var giveMeFive = true;
  // 마지막에 쉼표 추가 시 포맷터가 자동으로 변경
  List<int> nums = [
    1,
    2,
    3,
    4,
    // collection if
    if (giveMeFive) 5, // === if(giveMeFive){ nums.add(5); }
  ];
  print(numbers + nums);
  // String은 추가 안됨. int 타입만 받음
  // numbers.add("1");  //에러
  // numbers.add(1);    //가능

  /////////// 3. String Interpolation ///////////
  var myname = 'jhin';
  var myage = 10;
  // 단순 변수 값을 담으려면 $변수, 계산이 필요할시 ${변수 식}사용
  var greeting = 'Hello, my name is $myname, I\'m ${myage + 2}!';
  print(greeting);

  /////////// 4. Collection For ///////////
  var oldFriends = ['nico', 'lynn'];
  var newFriends = [
    'lewis',
    'ralph',
    'darren',
    for (var friend in oldFriends) "❤️ $friend",
  ];
  // for (var friend in oldFriends) {
  //   newFriends.add();
  // }
  print(newFriends);

  /////////// 5. Maps ///////////
  var player = {
    'name': 'jhin',
    'xp': 19.99,
    'superpower': false,
  };

  //Map<key Type, value Type>
  Map<int, bool> myplayer = {
    1: true,
    2: false,
    // '3': '3', //에러
  };
  Map<List<int>, bool> mymap = {
    [1, 2]: true,
  };
  List<Map<String, Object>> players = [
    {'name': 'jhin', 'xp': 9.99},
    {'name': 'nico', 'xp': 5}
  ];
  print(player);
  print(myplayer);
  print(mymap);
  print(players);

  /////////// 6. Sets ///////////
  var setnumbers = {1, 2, 3, 4};
  Set<int> mynumbers = {1, 2, 3, 4};
  mynumbers.add(1);
  mynumbers.add(1);
  print(mynumbers); // === {1,2,3,4}
  // set의 요소는 unique 함
  print(setnumbers);
}
