//////////////////////////// 1. Classes ///////////////////////////

abstract class User {
  constructor(
    private firstName: string,
    private lastName: string,
    protected nickname: string,
    public age: number
  ) {}

  abstract getNickName(): void;

  private getFullname() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Player extends User {
  getNickName(): void {
    console.log(this.nickname);
  }
}

const jhin = new Player("jhin", "kuu", "진", 12);

// jhin.fristName;  //private 불가
// jhin.nickname;   //protected 불가
// jhin.age;        //public 가능
// jhin.getFullname();  //private 불가

type Words1 = {
  [key: string]: string;
};

// let dict: Words1 = {
//   potata: "food",
// };

class Dict1 {
  private words: Words1;
  constructor() {
    this.words = {};
  }
  add(word: Word1) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
}

class Word1 {
  constructor(public term: string, public def: string) {}
}

const apple1 = new Word1("apple", "사과");

const dict1 = new Dict1();

dict1.add(apple1);
dict1.def("apple1");

//////////////////////////// 2. Interfaces ///////////////////////////
class Dict2 {
  private words: Words1;
  constructor() {
    this.words = {};
  }
  add(word: Word2) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
  static hello() {
    return "hello";
  }
}

class Word2 {
  constructor(public readonly term: string, public readonly def: string) {}
}

const kimchi = new Word2("kimchi", "한국음식");
// kimchi.def = "xxx";  //읽기 전용 에러
Dict2.hello();

///////////////

type Nickname = string;
type Health = number;
type Friends = Array<string>;

type Team = "red" | "blue" | "yellow";

type Player2 = {
  nickname: Nickname;
  healthBar: Health;
  team: Team;
};

const nico: Player2 = {
  nickname: "nico",
  healthBar: 10,
  team: "blue",
};

//오브젝트의 모양 정의
interface Player3 {
  nickname: Nickname;
  healthBar: Health;
  team: Team;
}

const jhin1: Player3 = {
  nickname: "jhin1",
  healthBar: 10,
  team: "blue",
};

interface User1 {
  name: string;
}

interface User1 {
  age: number;
}

interface Player4 extends User1 {}

const jhin2: Player4 = {
  name: "jhin",
  age: 20,
};

////////////////

abstract class User5 {
  constructor(protected firstName: string, protected lastName: string) {}
  abstract sayHi(name: string): string;
  abstract fullName(): string;
}
//new User5 //에러

class Player5 extends User5 {
  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `Hello ${name}. My name is ${this.fullName()}`;
  }
}

//////////

interface User6 {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}

interface Human {
  health: number;
}
class Player6 implements User6, Human {
  constructor(
    public firstName: string,
    public lastName: string,
    public health: number
  ) {}
  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `Hello ${name}. My name is ${this.fullName()}`;
  }
}

function makeUser(user: User6): User6 {
  return {
    firstName: "jhin",
    lastName: "las",
    fullName: () => "xx",
    sayHi: (name) => "string",
  };
}

makeUser({
  firstName: "jhin",
  lastName: "las",
  fullName: () => "xx",
  sayHi: (name) => "string",
});
