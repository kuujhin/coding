type Words = {
  [key: string]: string;
};

class Dictionary {
  private words: Words;
  constructor() {
    this.words = {};
  }

  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }

  get(term: string) {
    console.log(this.words[term]);
  }

  del(term: string) {
    delete this.words[term];
  }

  update(word: Word) {
    if (this.words[word.term] !== undefined) {
      this.words[word.term] = word.def;
    }
  }

  showAll() {
    console.log("Show All Start!");
    for (let term in this.words) {
      console.log(`- ${term}: ${this.words[term]}`);
    }
    console.log("Show All End.");
  }

  cnt() {
    console.log(`count: ${Object.keys(this.words).length}`);
  }

  upsert(word: Word) {
    this.words[word.term] = word.def;
  }

  exists(term: string) {
    if (this.words[term] !== undefined) {
      return console.log(`${term} exist!`);
    }
    return console.log(`${term} doesn't exist!`);
  }

  bulkAdd(words: Word[]) {
    words.forEach((word) => {
      this.add(word);
    });
  }

  bulkDelete(terms: string[]) {
    terms.forEach((term) => {
      this.del(term);
    });
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const dict = new Dictionary();

dict.add(new Word("apple", "사과사과"));
dict.get("apple");
dict.showAll();

dict.del("apple");
dict.showAll();

dict.add(new Word("apple", "사과"));
dict.update(new Word("apple", "맛있는 사과"));
dict.showAll();

dict.upsert(new Word("apple", "기다란 사과"));
dict.upsert(new Word("banana", "바네너"));
dict.cnt();
dict.showAll();

dict.exists("banana");
dict.exists("car");

dict.bulkAdd([
  { term: "김치", def: "대박이네~" },
  { term: "아파트", def: "비싸네~" },
]);
dict.showAll();

dict.bulkDelete(["김치", "아파트"]);
dict.showAll();
