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
  add(word: Word) {
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

dict1.add(apple);
dict1.def("apple");
