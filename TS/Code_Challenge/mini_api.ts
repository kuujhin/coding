interface MyStorage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  private storage: MyStorage<T> = {};

  setItem(key: string, value: T) {
    this.storage[key] = value;
  }
  getItem(key: string): T {
    return this.storage[key];
  }
  clearItem(key: string) {
    delete this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

const stringsStorage = new LocalStorage<string>();

stringsStorage.setItem("apple", "사과");
stringsStorage.setItem("banana", "바나나");
stringsStorage.getItem("apple");
stringsStorage.clearItem("banana");
stringsStorage.getItem("banana");
stringsStorage.clear;
stringsStorage.getItem("apple");

/////////////////////////

type successFn = (a: GeolocationPosition) => void;
type errorFn = (a: GeolocationPositionError) => void;
type optionsObj = {
  maximumAge?: number;
  timeout?: number;
  enableHighAccuracy?: boolean;
};

class geolocation {
  getCurrentPosition(
    success: successFn,
    error?: errorFn,
    options?: optionsObj
  ) {}
  watchPosition(
    success: successFn,
    error?: errorFn,
    options?: optionsObj
  ): number {
    return 1;
  }
  clearWatch(id: number) {}
}
