type Last = <T>(arr: Array<T>) => T;
const lastFunction: Last = (arr) => arr[arr.length - 1];

const last1 = lastFunction([false, true, 2, 3, "4", "5"]);
const last2 = lastFunction([1, "2", 3]);
console.log(last1, last2);

type Prepend = <T, V>(arr: Array<T>, item: V) => Array<T | V>;
const prependFunction: Prepend = (arr, item) => [item, ...arr];

const prepend1 = prependFunction([2, 3, 4], 1);
const prepend2 = prependFunction([true, 2, 3], "0");
console.log(prepend1, prepend2);

type Mix = <T, V>(arr1: Array<T>, arr2: Array<V>) => Array<T | V>;
const mixFunction: Mix = (arr1, arr2) => [...arr1, ...arr2];

const mix1 = mixFunction([false, 1, "2"], [1, 2, 3]);
const mix2 = mixFunction([false, true], [3, 4]);
console.log(mix1, mix2);

type Count = <T>(arr: Array<T>) => number;
const countFunction: Count = (arr) => arr.length;

const count1 = countFunction([false, 1, "2"]);
const count2 = countFunction([0, "1", 2, "3"]);
console.log(count1, count2);

type FindIndex = <T>(arr: Array<T>, item: any) => number | null;
const findIndexFunction: FindIndex = (arr, item) => {
  const index = arr.indexOf(item);
  if (index === -1) return null;
  return index;
};

const findIndex1 = findIndexFunction([false, 1, "2"], 2);
const findIndex2 = findIndexFunction([false, 1, "2"], 1);
const findIndex3 = findIndexFunction([1, 2, "3"], false);
console.log(findIndex1, findIndex2, findIndex3);

type Slice = <T>(
  arr: Array<T>,
  startIndex: number,
  endIndex?: number
) => Array<T>;
const sliceFunction: Slice = (arr, startIndex, endIndex?) =>
  arr.slice(startIndex, endIndex);

const slice1 = sliceFunction([false, 1, "2", 3, 4], 1, 3);
const slice2 = sliceFunction([false, 1, "2", 3, 4], 1);
console.log(slice1, slice2);
