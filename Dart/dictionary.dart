typedef DictionaryType = Map<String, String>;

class Dictionary {
  final DictionaryType dictionary = {};

  void add(String term, String definition) {
    dictionary.containsKey(term)
        ? print('Add Error')
        : {dictionary[term] = definition, print('Add Success')};
  }

  void get(String term) {
    dictionary.containsKey(term)
        ? print('Get Success: $term, ${dictionary[term]}')
        : print('Get Error');
  }

  void delete(String term) {
    dictionary.containsKey(term)
        ? {print('Delete Success'), dictionary.remove(term)}
        : print('Delete Error');
  }

  void update(String term, String definition) {
    dictionary.containsKey(term)
        ? {
            dictionary.update(term, (value) => definition),
            print('Update Success')
          }
        : print('Update Error');
  }

  void showAll() {
    print('Show All: ');
    dictionary.forEach((key, value) {
      print('--$key: $value');
    });
  }

  void count() {
    print('Count: ${dictionary.length}');
  }

  void upsert(String term, String definition) {
    dictionary[term] = definition;
    print('Upsert Success');
  }

  void exists(String term) {
    dictionary.containsKey(term)
        ? print('Exists: $term exists')
        : print("Exists: $term doesn't exist");
  }

  void bulkAdd(List<DictionaryType> wordList) {
    print('BulkAdd ${wordList.length} words...');
    wordList.forEach((word) {
      add(word['term']!, word['definition']!);
    });
    print('BulkAdd Finish');
  }

  void bulkDelete(List<String> termList) {
    print('BulkDelete ${termList.length} words...');
    termList.forEach((term) {
      delete(term);
    });
    print('BulkDelete Finish');
  }
}

void main() {
  var myDictionary = Dictionary();

  myDictionary.add('apple', '사과');
  myDictionary.add('apple', '썩은 사과');
  myDictionary.get('apple');
  myDictionary.get('banana');
  myDictionary.delete('apple');

  myDictionary.add('apple', '사과');
  myDictionary.update('apple', '빨간사과');
  myDictionary.update('banana', '바나나');
  myDictionary.upsert('banana', '맛있는바나나');
  myDictionary.showAll();
  myDictionary.count();
  myDictionary.exists('banana');

  myDictionary.bulkAdd([
    {"term": "apple", "definition": "노란사과"},
    {"term": "car", "definition": "카"},
    {"term": "door", "definition": "도어"}
  ]);
  myDictionary.showAll();

  myDictionary.bulkDelete(['apple', 'car']);
  myDictionary.showAll();
}
